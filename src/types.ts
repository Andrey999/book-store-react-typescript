import {
    FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR, ADD_TO_CARD, BOOK_ON_DECREASE, BOOK_ON_DELETE,
    SEARCH_BOOKS, FETCH_FAVORITES, FETCH_FAVORITES_SUCCESS, FETCH_FAVORITES_ERROR, DELETE_FAVORITES
} from './constants'

///// data books /////
export interface IBooks {
    title: string
    price: number
    count: number
    id: string
    thumbnailUrl: string
    authors: Array<string>
    categories: Array<string>
}

///// state reducer for app /////
export interface IAppInitialStateType {
    loading: boolean
    error: string | null
    books: Array<IBooks>
    inputSearchBooks: string
}

///// state reducer for cartPage /////
export interface ICartPageInitialStateType {
    items: Array<IBooks>
    totalPrice: number
}

///// state reducer for favoritesPage /////
export interface IFavoritesPageInitialStateType {
    loading: boolean
    error: string | null
    favorites: Array<IBooks>
}

///// type for actions /////
interface IFetchBooksRequestAction {
    type: typeof FETCH_BOOKS_REQUEST
}

interface IFetchBooksSuccessAction {
    type: typeof FETCH_BOOKS_SUCCESS,
    payload: IBooks[]
}

interface IFetchBooksErrorAction {
    type: typeof FETCH_BOOKS_ERROR,
    payload: string
}

interface IAddToCardAction {
    type: typeof ADD_TO_CARD,
    payload: { bookId: string, books: IBooks[] }
}

interface IOnDecreaseAction {
    type: typeof BOOK_ON_DECREASE,
    payload: { bookId: string, books: IBooks[] }
}

interface IOnDeleteAction {
    type: typeof BOOK_ON_DELETE,
    payload: string
}

interface ISearchBooksAction {
    type: typeof SEARCH_BOOKS,
    payload: string
}

export interface IFavoriteRequestAction {
    type: typeof FETCH_FAVORITES
}

export interface IAddToFavorite {
    type: typeof FETCH_FAVORITES_SUCCESS,
    payload: { favoriteId: string, books: IBooks[] }
}

export interface IOnDeleteFromFavorite {
    type: typeof DELETE_FAVORITES,
    payload: string
}

export interface IFavoriteErrorAction {
    type: typeof FETCH_FAVORITES_ERROR,
    payload: string
}

// Actions Type
// Тип загрузки книг в стор
export type FetchActionType = IFetchBooksRequestAction | IFetchBooksSuccessAction | IFetchBooksErrorAction

// Тип добавления данных в избранное
export type FetchFavoritesActionType = IFavoriteRequestAction | IAddToFavorite | IOnDeleteFromFavorite | IFavoriteErrorAction

// Тип добавления в корзину
export type AddToCardAction = IAddToCardAction

// Тип для удаления и уменьшения
export type IOnDecreaseActionType = IOnDecreaseAction
export type DeleteActionType = IOnDeleteAction

// Тип для поиска книг
export type SearchActionType = ISearchBooksAction

// Обьединение типов для appReducer
export type AppActionTypes = FetchActionType | SearchActionType

// Обьединение типов для cartPageReducer
export type CartPageActionTypes = AddToCardAction | IOnDecreaseActionType | DeleteActionType