import { IAuthPageInitialStateType, AuthActions } from '../types'

const initialState: IAuthPageInitialStateType = {
    isAuth: false,
    login: '',
    password: ''
}

export const authPageReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state,
                isAuth: action.payload
            };

        case 'LOG_IN':
            return {
                ...state
            };

        case 'LOG_OUT':
            return {
                ...state,
                isAuth: initialState.isAuth
            };

        default:
            return state;
    }
}