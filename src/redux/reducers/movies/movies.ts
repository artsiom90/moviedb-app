import { MoviesActionEnum, MoviesActionType, MoviesData, MoviesState } from './types'

const initialState = {
    movies: {} as MoviesData,
    search: '',
}

export const moviesReducer = (state = initialState, action: MoviesActionType): MoviesState => {
    switch (action.type) {
        case MoviesActionEnum.SET_MOVIES:
            return { ...state, movies: action.payload }
        case MoviesActionEnum.SET_SEARCH:
            return { ...state, search: action.payload }
        default:
            return state
    }
}
