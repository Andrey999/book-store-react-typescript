import { combineReducers, createStore, applyMiddleware, compose, Store } from 'redux';
import { appReducer } from './reducers/app';
import { cartPageReducer } from './reducers/cartPage';
import { favoritesPageReducer } from './reducers/favorites';
import { IAppInitialStateType, ICartPageInitialStateType, IFavoritesPageInitialStateType } from './types'
import thunkMiddleware from 'redux-thunk';

// type AppReducerType = {
//     app: typeof appReducer,
//     cartPage: typeof cartPageReducer
//   };

// export type AppState = ReturnType<typeof rootReducer>

// @ts-ignore
let composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    app: appReducer,
    cartPage: cartPageReducer,
    favorites: favoritesPageReducer
})

export interface AppState {
    app: IAppInitialStateType
    cartPage: ICartPageInitialStateType
    favorites: IFavoritesPageInitialStateType
}

export const store: Store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)
    ));