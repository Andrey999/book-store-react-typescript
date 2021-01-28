import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { CartPage } from '../../pages/CartPage';
import { BookHeader } from '../bookHeader/BookHeader';
import { AboutPage } from '../../pages/AboutPage';
import { ContactsPage } from '../../pages/ContactsPage';
import { FavoritesPage } from '../../pages/FavoritesPage';
import './App.css';

interface IAppProps {
    bookStoreApi: any
}

export const App = (props: IAppProps) => {
    return (
        <Fragment>
            <BookHeader />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contacts" component={ContactsPage} />
                    <Route path="/favorites" component={FavoritesPage} />
                </Switch>
            </div>
        </Fragment>
    );
};   