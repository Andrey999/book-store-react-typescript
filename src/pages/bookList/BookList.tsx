import React, { useEffect, useState } from 'react';
import { BookListItem } from '../bookListItem/BookListItem';
import { FavoriteStar } from './FavoriteStar'
import { Spinner } from '../spinner/Spinner';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { BookStoreApi } from '../../api/bookstore-api';
import { AppActions, CartPageActions, FavoritesPageActions, AuthPageActions } from '../../actions/index';
import { AppState } from '../../store';
import { IBooks } from './../../types';
import './bookList.css';


const BookList = () => {
    const { books, inputSearchBooks, loading, highlight } = useSelector((state: AppState) => ({
        loading: state.app.loading,
        error: state.app.error,
        books: state.app.books,
        inputSearchBooks: state.app.inputSearchBooks,
        highlight: state.favorites.highlight

    }), shallowEqual);
    const dispatch = useDispatch()
    const [opacity, setOpacity] = useState<number>(0)
    const [clickedStar, setClickedStar] = useState<Array<string>>([])
    // console.log('clickedStar: ', clickedStar)

    // const singleClickedStar = books?.find(book => book.id === clickedStar)
    // let item = clickedStar.map(i => i)
    console.log('highlight: ', highlight);


    useEffect(() => {
        setOpacity(1)
        dispatch(AuthPageActions.isAuth());
        dispatch(AppActions.booksRequested());
        BookStoreApi.getBooks()
            .then((dataBooks: IBooks[]) => dispatch(AppActions.booksLoaded(dataBooks)))
            .catch((error: string) => dispatch(AppActions.booksError(error)));
    }, []);

    const addToFavorite = (id: string) => {
        setClickedStar(clickedStar.includes(id)
            ? clickedStar.filter(x => x !== id)
            : [...clickedStar, id]
        )
        dispatch(FavoritesPageActions.addToFavorites(id))
    }

    if (loading) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner />
            </div>
        )
    }

    if (!books) return null

    let filteredData = inputSearchBooks ?
        books.filter(item => item.title.toLowerCase().includes(inputSearchBooks))
        :
        books

    return (
        <div style={{ opacity: opacity, transition: 'opacity 1s' }}>
            <ul className="book__list">
                {!filteredData.length && <div className="font-weight-bold m-auto">По вашему запросу ничего не найдено</div>}
                {filteredData.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem
                                book={book}
                                addToCard={() => dispatch(CartPageActions.addToCard(book.id))}
                                // addToFavorite={() => addToFavorite(book.id)}
                                addToFavorite={() => dispatch(FavoritesPageActions.addToFavorites(book.id))}
                                highlight={highlight.includes(book.id)}
                                // setClickedStar={() => setClickedStar(book.id)}
                                clickedStar={clickedStar}
                                singleClickedStar={() => null}
                            />
                            {/* <FavoriteStar clickedStar={clickedStar} singleClickedStar={singleClickedStar} /> */}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BookList