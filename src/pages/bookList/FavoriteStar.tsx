import React, { Fragment} from "react";
import "../bookListItem/BookListItem.css";

interface BookListItemProps {
    // book: IBooks
    // addToCard: () => void
    addToFavorite: () => void
    highlight: boolean
    setClickedStar: () => void
    // light: boolean
    clickedStar: any
    singleClickedStar: any
}

export const FavoriteStar = (props: BookListItemProps) => {
    const { addToFavorite, setClickedStar, clickedStar, singleClickedStar, highlight } = props
    // console.log('clickedStar: ', clickedStar );
    // console.log('singleClickedStar: ', singleClickedStar );
    
    return (
        <Fragment>
            <div className="addToFavorite" style={{ color: highlight ? '#cb11ab' : 'rgb(245,245,245)'}} onClick={addToFavorite}><i className="fa fa-star"></i></div> 
        </Fragment>
    );
};