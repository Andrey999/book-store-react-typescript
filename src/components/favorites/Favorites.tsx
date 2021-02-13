import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { CartPageActions, FavoritesPageActions } from '../../actions/index';
import { Spinner } from '../spinner/Spinner';
import "./Favorites.css";

export const Favorites = () => {
    const dispatch = useDispatch();
    const [opacity, setOpacity] = useState<number>(0)
    const { favorites, loading } = useSelector((state: AppState) => ({
        loading: state.favorites.loading,
        favorites: state.favorites.favorites
    }), shallowEqual);

    useEffect(() => {
        setTimeout(() => setOpacity(1), 1000)
    }, [])

    if (opacity === 0) {
        return (
            <div className="d-flex justify-content-center mt-5">
                <Spinner />
            </div>
        )
    }

    if (!favorites.length) return <h2 className="empty__cart text-center">Your favorites is empty =/</h2>

    return (
        <div className="favorites__list" style={{ opacity: opacity, transition: 'opacity 1s' }}>
            {favorites.map(favorite => {
                return (
                    <div className="favorites__list-item card-deck">
                        <div className="card">
                            <img src={favorite.thumbnailUrl} className="book__image card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{favorite.title}</h5>
                                <h4 className="card-title">{favorite.price}$</h4>
                                <div className="d-flex fsize__small">
                                    <p className="text-black-50 mb-1 mr-1">Author:</p>
                                    <span className="font-weight-normal"> {favorite.authors[0]}</span>
                                </div>
                                <div className="d-flex fsize__small">
                                    <p className="text-black-50 mb-1 mr-1">Categories:</p>
                                    <span className="font-weight-normal"> {favorite.categories}</span>
                                </div>
                            </div>
                            <div className="card__footer-btn card-footer d-flex align-items-center">
                                <button className="btn addToCart" onClick={() => dispatch(CartPageActions.addToCard(favorite.id))}>Add to cart</button>
                                <button className="btn deletFromFavorites" onClick={() => dispatch(FavoritesPageActions.deletFromFavorites(favorite.id))}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
};