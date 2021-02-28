import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { store } from './store';
// import { AppRouter } from './router';
// import { Error } from './components/error/Error';
import { App } from './pages/app/App';
import { BookStoreApi } from './api/bookstore-api';


ReactDOM.render(
    <Provider store={store}>
        {/* <Error> */}
            <Router>
                {/* <AppRouter /> */}
                <App bookStoreApi={BookStoreApi} />
            </Router>
        {/* </Error> */}
    </Provider>,
    document.getElementById("root")
);