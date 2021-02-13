import { IFavoritesPageInitialStateType, FetchFavoritesActionType } from '../types'

const initialState: IFavoritesPageInitialStateType = {
    loading: false,
    error: null,
    favorites: []
}

export const favoritesPageReducer = (state = initialState, action: FetchFavoritesActionType) => {
    switch (action.type) {
        case 'FETCH_FAVORITES':
            return {
                ...state,
                loading: true
            };
        //================================================
        case 'FETCH_FAVORITES_SUCCESS':
            const { favoriteId, books } = action.payload
            const favoriteBook = books.find(book => book.id === favoriteId)

            return {
                ...state,
                loading: false,
                favorites: [...state.favorites, favoriteBook]
            };
        //================================================
        case 'DELETE_FAVORITES':
            const deleteFavorite = state.favorites.filter(f => f.id !== action.payload);

            return {
                ...state,
                loading: false,
                favorites: [...deleteFavorite]
            };
        //================================================
        case 'FETCH_FAVORITES_ERROR':
            return {
                ...state,
                loading: false,
                favorites: [],
                error: action.payload,
            };
        default:
            return state;
    }
}