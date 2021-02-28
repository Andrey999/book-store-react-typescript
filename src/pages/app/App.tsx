import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, AboutPage, CartPage, ContactsPage, FavoritesPage, AuthPage } from '../index';
import { BookHeader } from '../bookHeader/BookHeader';
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
                    <Route path="/auth" component={AuthPage} />
                </Switch>
            </div>
        </Fragment>
    );
};   