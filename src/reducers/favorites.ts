import { IFavoritesPageInitialStateType, FetchFavoritesActionType } from '../types'

const initialState: IFavoritesPageInitialStateType = {
    loading: false,
    error: null,
    favorites: [],
    highlight: []
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
            // const copyHightlight = state.highlight
            // const starHighlightId = copyHightlight.includes(favoriteId) ? copyHightlight.filter(x => x !== favoriteId) : [copyHightlight, favoriteId]
            // console.log('starHighlightId: ', starHighlightId);
            

            if(state.favorites.find(item => item.id === favoriteId)) {
                return {
                    ...state
                }
            }

            return {
                ...state,
                loading: false,
                favorites: [...state.favorites, favoriteBook],
                highlight: [...state.highlight, favoriteId],
                // highlight: [...state.highlight, starHighlightId]
            };
        //================================================
        case 'DELETE_FAVORITES':
            const deleteFavorite = state.favorites.filter(f => f.id !== action.payload);
            const deleteFavoriteStar = state.highlight.filter(id => id !== action.payload)

            return {
                ...state,
                loading: false,
                favorites: [...deleteFavorite],
                highlight: [...deleteFavoriteStar],
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