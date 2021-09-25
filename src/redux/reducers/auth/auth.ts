import { AuthActionEnum, AuthActionType, AuthState } from './types'

const initialState = {
    isAuth: false,
}

export const authReducer = (state = initialState, action: AuthActionType): AuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return { ...state, isAuth: action.payload }
        default:
            return state
    }
}
