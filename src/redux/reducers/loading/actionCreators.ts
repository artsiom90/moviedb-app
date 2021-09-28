import { LoadingActionEnum, SetLoadingAction } from './types'

export const LoadingActionCreators = {
    setIsLoading: (payload: boolean): SetLoadingAction => ({ type: LoadingActionEnum.SET_IS_LOADING, payload }),
}
