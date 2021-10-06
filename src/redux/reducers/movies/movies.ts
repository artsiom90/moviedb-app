import { Movie, MoviesActionEnum, MoviesActionType, MoviesData, MoviesState } from './types'

const initialState = {
    movies: {} as MoviesData,
    movieInfo: {} as Movie,
    search: '',
}

export const moviesReducer = (state = initialState, action: MoviesActionType): MoviesState => {
    switch (action.type) {
        case MoviesActionEnum.SET_MOVIES:
            return { ...state, movies: action.payload }
        case MoviesActionEnum.SET_MOVIE:
            return { ...state, movieInfo: action.payload }
        case MoviesActionEnum.SET_SEARCH:
            return { ...state, search: action.payload }
        default:
            return state
    }
}
