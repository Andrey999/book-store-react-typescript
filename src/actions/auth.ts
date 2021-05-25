import { LOG_IN, LOG_OUT, IS_AUTH } from '../constants'
import { IAuthAction, IAuthActionLogOut, IIsAuthAction } from '../types'

export default {
    isAuth(): IIsAuthAction {
        const getStorage = localStorage.getItem('isAuth')
        return {
            type: IS_AUTH,
            payload: Boolean(getStorage)
        }
    },

    authLogin(login: string, password: string): IAuthAction {
        return {
            type: LOG_IN,
            payload: { login, password }
        }
    },

    authLogout(): IAuthActionLogOut {
        return {
            type: LOG_OUT
        }
    }
}