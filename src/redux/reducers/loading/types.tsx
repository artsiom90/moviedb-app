export interface LoadingState {
    isLoading: boolean
}
export enum LoadingActionEnum {
    SET_IS_LOADING = 'SET_IS_LOADING'
}
export interface SetLoadingAction {
    type: LoadingActionEnum.SET_IS_LOADING
    payload: boolean
}
export type LoadingActionType = SetLoadingAction
