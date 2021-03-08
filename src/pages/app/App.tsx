import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, AboutPage, CartPage, ContactsPage, FavoritesPage, AuthPage } from '../index';
import { BookHeader } from '../bookHeader/BookHeader';
import { BarChart } from './../BarChart';
import './App.css';


export const App = () => {
    const state = [
        { name: 'Mon', value: 20 },
        { name: 'Tue', value: 40 },
        { name: 'Wed', value: 35 },
        { name: 'Thu', value: 50 },
        { name: 'Fri', value: 55 },
        { name: 'Sat', value: 40 },
        { name: 'Sun', value: 30 }
    ]

    // console.log(undefined == 0);
    // console.log(undefined === 0);
    // console.log(undefined >= 0);
    // console.log(null >= 0);
    // console.log(false == 0);

    return (
        <Fragment>
            <BookHeader />
            <div className="container">
            {/* <BarChart state={state} /> */}
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