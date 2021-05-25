import { BOOK_ON_DECREASE, BOOK_ON_DELETE, ADD_TO_CARD } from '../constants'
import {  IOnDecreaseActionType, AddToCardAction, DeleteActionType } from '../types'
import { store } from '../store'

export default {
    // уменьшение кол-ва(и цены) книг в массиве 
    onDecrease(bookId: string): IOnDecreaseActionType {
        const { books } = store.getState().app
        return {
            type: BOOK_ON_DECREASE,
            payload: {bookId, books}
        }
    },

    // удаление книги из масссива
    onDelete(bookId: string): DeleteActionType {
        return {
            type: BOOK_ON_DELETE,
            payload: bookId
        }
    },

    // добавление выбранных книг в массив
    addToCard(bookId: string): AddToCardAction {
        const { books } = store.getState().app
        return {
            type: ADD_TO_CARD,
            payload: {bookId, books}
        }
    }
}