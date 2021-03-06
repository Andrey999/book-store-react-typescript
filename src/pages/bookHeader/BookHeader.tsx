import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { InputComponent } from '../input/InputComponent';
import { AppState } from '../../store';
import { AuthPageActions } from '../../actions/index';
import "./BookHeader.css";


export const BookHeader = () => {
    const { items, favorites, isAuth } = useSelector((state: AppState) => ({
        items: state.cartPage.items,
        favorites: state.favorites.favorites,
        isAuth: state.auth.isAuth
    }), shallowEqual)
    const [search, setSearch] = useState(false)
    const dispatch = useDispatch()

    const logOut = () => {
        localStorage.clear()
        dispatch(AuthPageActions.authLogout())
    }

    return (
        <header className="header">
            <div className="container header__menu">
                <Link to="/" className="text-decoration-none">
                    <div className="book__header-title">Restore</div>
                </Link>

                <ul className="nav nav__menu">
                    <li className="nav-item">
                        <NavLink to="/" exact={true} className="nav-link" activeClassName="nav-link-color">
                            <div className="nav__menu-title">Home</div>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-link" activeClassName="nav-link-color">
                            <div className="nav__menu-title">About</div>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contacts" className="nav-link" activeClassName="nav-link-color">
                            <div className="nav__menu-title">Contacts</div>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        {isAuth ?
                            <NavLink to="/" className="nav-link" onClick={logOut}>
                                <div className="container__icon-auth">LogOut</div>
                            </NavLink>
                            :
                            <NavLink to="/auth" className="nav-link" activeClassName="nav-link-color">
                                <div className="container__icon-auth">LogIn</div>
                            </NavLink>
                        }
                    </li>
                </ul>

                {search && <InputComponent />}

                <div className="container__icon">
                    <div onClick={() => setSearch(!search)}>
                        <i className="search-icon fa fa-search"></i>
                    </div>

                    <Link
                        to="/favorites"
                        className="shopping__cart text-decoration-none"
                    >
                        <i style={{ color: favorites.length ? '#cb11ab' : '#fff' }} className="favorites-icon fa fa-heart" aria-hidden="true"></i>
                    </Link>

                    <Link
                        to="/cart"
                        className="shopping__cart text-decoration-none"
                    >
                        <i className="cart-icon fa fa-shopping-cart" />
                        <span className="shopping__cart-total">{items.length ? items.length : ''}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};