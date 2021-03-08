import React, { useEffect, useState } from 'react';
import { BookListItem } from '../bookListItem/bookListItem';
import { Spinner } from '../spinner/Spinner';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { BookStoreApi } from '../../api/bookstore-api';
import { AppActions, CartPageActions, FavoritesPageActions, AuthPageActions } from '../../actions/index';
import { AppState } from '../../store';
import { IBooks } from './../../types';
import './bookList.css';


const BookList = () => {
    const { books, inputSearchBooks, loading } = useSelector((state: AppState) => ({
        loading: state.app.loading,
        error: state.app.error,
        books: state.app.books,
        inputSearchBooks: state.app.inputSearchBooks
    }), shallowEqual);
    const dispatch = useDispatch()
    const [opacity, setOpacity] = useState<number>(0)

    useEffect(() => {
        setOpacity(1)
        dispatch(AuthPageActions.isAuth());
        dispatch(AppActions.booksRequested());
        BookStoreApi.getBooks()
            .then((dataBooks: IBooks[]) => dispatch(AppActions.booksLoaded(dataBooks)))
            .catch((error: string) => dispatch(AppActions.booksError(error)));
    }, []);

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
                                addToFavorite={() => dispatch(FavoritesPageActions.addToFavorites(book.id))}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default BookList