import { TVShow, TVShowData, TVShowsActionEnum, TVShowsActionType, TVShowState } from "./types"

const initialState = {
    tvShows: {} as TVShowData,
    tvShowsInfo: {} as TVShow,
}

export const tvShowsReducer = (state = initialState, action: TVShowsActionType): TVShowState => {
    switch (action.type) {
        case TVShowsActionEnum.SET_TV_SHOWS:
            return { ...state, tvShows: action.payload }
        case TVShowsActionEnum.SET_TV_SHOW:
            return { ...state, tvShowsInfo: action.payload }
        default:
            return state
    }
}
