import { IAppInitialStateType, AppActionTypes } from '../types'
// import { Reducer } from 'redux';

const initialState: IAppInitialStateType = {
    loading: false,
    error: null,
    books: [], // все книги
    inputSearchBooks: ''
}

export const appReducer = (state = initialState, action: AppActionTypes): IAppInitialStateType => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true
            };
        //================================================
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                loading: false,
                books: action.payload
            };
        //================================================

        case 'FETCH_BOOKS_ERROR':
            return {
                ...state,
                loading: false,
                books: [],
                error: action.payload,
            };

        //================================================
        // поиск и отрисовка найденных книг
        case 'SEARCH_BOOKS':
            return {
                ...state,
                inputSearchBooks: action.payload
            };

        default:
            return state;
    }
}