import { LoadingActionEnum, LoadingActionType, LoadingState } from "./types"

const initialState = {
    isLoading: false,
}

export const loadingReducer = (state = initialState, action: LoadingActionType): LoadingState => {
    switch (action.type) {
        case LoadingActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}
