import React, { ChangeEvent } from "react";
import { IBooks } from '../../types'
import "./BookListItem.css";

interface BookListItemProps {
    book: IBooks
    addToCard: () => void
    addToFavorite: () => void
}

export const BookListItem = (props: BookListItemProps) => {
    const { book, addToCard, addToFavorite } = props
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
                    <div className="addToFavorite" onClick={addToFavorite}><i className="fa fa-star"></i></div> 
                </div>
                <div className="card__footer-btn card-footer d-flex align-items-center">
                    <button className="btn addToCarts" onClick={addToCard}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};