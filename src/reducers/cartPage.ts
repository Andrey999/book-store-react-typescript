import { ICartPageInitialStateType, CartPageActionTypes } from '../types'
import { store } from '../store'
import { Reducer } from 'redux';

const initialState: ICartPageInitialStateType = {
    items: [], // basket added books
    totalPrice: 0, 
}

export const cartPageReducer = (state = initialState , action: CartPageActionTypes) => { 
    switch (action.type) {
            //================================================
            // добавление книги в таблицу
        case 'ADD_TO_CARD':
            const { bookId, books } = action.payload

            const book = books.find(book => book.id === bookId); // возвращаем обьект книги по id
            const bookIndex = state.items.findIndex(ind => ind.id === bookId); // ищем индекс у которого id, такой же как и у action.payload (возвращаем индекс элемента или -1)
            const item = state.items[bookIndex]; // в item записываем обьект который нашли по индексу

            let newBookItems;
            if (item) {
                newBookItems = {
                    ...item,
                    price: item.price + book!.price,
                    count: item.count + 1,
                };
            }   

            if (bookIndex < 0) {
                return {
                    ...state,
                    items: [...state.items, book],
                    totalPrice: state.totalPrice + book!.price
                };
            } else {
                return {
                    ...state,
                    items: [...state.items.slice(0, bookIndex), newBookItems, ...state.items.slice(bookIndex + 1)],
                    totalPrice: state.totalPrice + book!.price
                };
            };

            //================================================
            // уменьшение колличества книг и цены в таблице
        case 'BOOK_ON_DECREASE':
            const bookObj = action.payload.books.find(book => book.id === action.payload.bookId);
            const index = state.items.findIndex(ind => ind.id === action.payload.bookId); // ищем индекс у которого id, такой же как и у action.payload (возвращаем индекс элемента или -1)
            const itemDecrease = state.items[index]; // в item записываем обьект который нашли по индексу

            let decreaseBook;
            decreaseBook = {
                ...itemDecrease,
                count: itemDecrease.count - 1,
                price: itemDecrease.price - bookObj!.price
            };

            if(decreaseBook.count === 0) {
                decreaseBook = {
                    ...itemDecrease,
                    count: itemDecrease.count = 1,
                    price: itemDecrease.price
                };
                return {
                    ...state,
                    totalPrice: state.totalPrice
                }
            }
            return {
                ...state,
                items: [...state.items.slice(0, index), decreaseBook, ...state.items.slice(index + 1)],
                totalPrice: state.totalPrice - bookObj!.price
            };
            
            //================================================
            // удаление книги из таблицы
        case 'BOOK_ON_DELETE':
            const deleteBook = state.items.filter(book => book.id !== action.payload);
            const deleteBookPrice = state.items.find(book => book.id === action.payload);

            return {
                ...state,
                items: [...deleteBook],
                totalPrice: state.totalPrice - deleteBookPrice!.price
            };

        default:
            return state;
    }
}