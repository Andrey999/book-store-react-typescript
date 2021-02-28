import { LOG_IN } from '../constants'
import { IAuthAction } from '../types'

export default {
    auth(login: string, password: string): IAuthAction {
        return {
            type: LOG_IN,
            payload: { login, password }
        }
    }
}