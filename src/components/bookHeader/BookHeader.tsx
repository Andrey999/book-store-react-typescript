import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { InputComponent } from '../input/InputComponent';
import { AppState } from '../../store';
import "./BookHeader.css";


export const BookHeader = () => {
    const totalPrice = useSelector((state: AppState) => state.cartPage.totalPrice);

    return (
        <header className="header">
            <div className="container header__menu">
                <Link to="/" className="text-decoration-none">
                    <div className="book__header-title">Restore</div>
                </Link>

                <ul className="nav nav__menu">
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            <div className="nav__menu-title">About</div>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contacts" className="nav-link">
                            <div className="nav__menu-title">Contacts</div>
                        </Link>
                    </li>
                </ul>

                <InputComponent />

                <div className="container__icon">
                    <Link to="/auth" className="container__icon-link">
                        <div className="container__icon-auth">Войти</div>
                    </Link>

                    <Link
                        to="/favorites"
                        className="shopping__cart text-decoration-none"
                    >
                        <i className="favorites-icon fa fa-heart" aria-hidden="true"></i>
                    </Link>

                    <Link
                        to="/cart"
                        className="shopping__cart text-decoration-none"
                    >
                        <i className="cart-icon fa fa-shopping-cart" />
                        <span className="shopping__cart-total">{totalPrice}$</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};