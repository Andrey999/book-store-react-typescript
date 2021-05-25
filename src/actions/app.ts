import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, SEARCH_BOOKS } from '../constants'
import { FetchActionType, IBooks, SearchActionType } from '../types'

export default {
    // отправка запроса книг
    booksRequested(): FetchActionType {
        return {
            type: FETCH_BOOKS_REQUEST
        };
    },

    // получение книг
    booksLoaded(books: IBooks[]): FetchActionType {
        return {
            type: FETCH_BOOKS_SUCCESS,
            payload: books
        };
    },

    // ошибка
    booksError(error: string): FetchActionType {
        return {
            type: FETCH_BOOKS_ERROR,
            payload: error
        };
    },

    // поиск книг в массиве
    searchBooks(searchValue: string): SearchActionType {
        return {
            type: SEARCH_BOOKS,
            payload: searchValue
        }
    }
}