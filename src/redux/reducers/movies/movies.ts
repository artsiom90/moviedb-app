import { MoviesActionEnum, MoviesActionType, MoviesData, MoviesState } from './types'

const initialState = {
    movies: {} as MoviesData,
}

export const moviesReducer = (state = initialState, action: MoviesActionType): MoviesState => {
    switch (action.type) {
        case MoviesActionEnum.SET_MOVIES:
            return { ...state, movies: action.payload }
        default:
            return state
    }
}
