import { IAuthPageInitialStateType, IAuthAction } from '../types'

const initialState: IAuthPageInitialStateType = {
    login: '',
    password: ''
}

export const authPageReducer = (state = initialState, action: IAuthAction) => {
    switch (action.type) {
        case 'LOG_IN':
            return {
                ...state
            };

        default:
            return state;
    }
}