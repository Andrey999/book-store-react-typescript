import { log } from 'console';
import { FETCH_FAVORITES, FETCH_FAVORITES_SUCCESS, FETCH_FAVORITES_ERROR, DELETE_FAVORITES } from '../constants'
import { IFavoriteRequestAction, IAddToFavorite, IFavoriteErrorAction, IOnDeleteFromFavorite } from '../types'
import { store } from '../store'

export default {
    // загрузка избрaнных
    favoritesRequested(): IFavoriteRequestAction {
        return {
            type: FETCH_FAVORITES
        };
    },

    // получение избранных
    addToFavorites(favoriteId: string): IAddToFavorite {
        const { books } = store.getState().app
        return {
            type: FETCH_FAVORITES_SUCCESS,
            payload: { favoriteId, books }
        };
    },

    // удаление из избранных
    deletFromFavorites(favoriteId: string): IOnDeleteFromFavorite {
        return {
            type: DELETE_FAVORITES,
            payload: favoriteId
        };
    },

    // ошибка
    favoritesError(error: string): IFavoriteErrorAction {
        return {
            type: FETCH_FAVORITES_ERROR,
            payload: error
        };
    }
}