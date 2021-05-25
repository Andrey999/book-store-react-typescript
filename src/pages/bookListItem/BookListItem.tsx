import React from "react";
import { IBooks } from '../../types'
import { FavoriteStar } from '../bookList/FavoriteStar'
import "./BookListItem.css";

interface BookListItemProps {
    book: IBooks
    addToCard: () => void
    addToFavorite: () => void
    highlight: Array<string>
    // setClickedStar: (s: string) => void
    setClickedStar: () => void
    // light: boolean
    clickedStar: any
    singleClickedStar: any
}

export const BookListItem = (props: BookListItemProps) => {
    const { book, addToCard, addToFavorite, setClickedStar, clickedStar, singleClickedStar, highlight } = props
    // console.log('clickedStar: ', clickedStar );
    // console.log('singleClickedStar: ', singleClickedStar );

    return (
        <div className="book__list-item card-deck">
            <div className="card">
                <img src={book.thumbnailUrl} className="book__image card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <h4 className="card-title">{book.price}$</h4>
                    <div className="d-flex fsize__small">
                        <p className="text-black-50 mb-1 mr-1">Author:</p>
                        <span className="font-weight-normal"> {book.authors[0]}</span>
                    </div>
                    <div className="d-flex fsize__small">
                        <p className="text-black-50 mb-1 mr-1">Categories:</p>
                        <span className="font-weight-normal"> {book.categories}</span>
                    </div>
                    {/* < FavoriteStar
                        highlight={highlight}
                        addToFavorite={addToFavorite}
                        setClickedStar={() => setClickedStar(book.id)}
                        clickedStar={clickedStar}
                        singleClickedStar={singleClickedStar?.id}
                    /> */}
                    <div className="addToFavorite" style={{ color: highlight ? '#cb11ab' : 'rgb(245,245,245)'}} onClick={addToFavorite}><i className="fa fa-star" onClick={setClickedStar}></i></div> 
                </div>
                <div className="card__footer-btn card-footer d-flex align-items-center">
                    <button className="btn addToCarts" onClick={addToCard}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};