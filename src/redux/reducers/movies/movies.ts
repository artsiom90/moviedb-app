import { Credits, Movie, MoviesActionEnum, MoviesActionType, MoviesData, MoviesState } from './types'

const initialState = {
    movies: {} as MoviesData,
    movieInfo: {} as Movie,
    credits: {} as Credits,
    search: '',
    topRated: false,
    upcoming: false,
    currentPage: 1,
}

export const moviesReducer = (state = initialState, action: MoviesActionType): MoviesState => {
    switch (action.type) {
        case MoviesActionEnum.SET_MOVIES:
            return { ...state, movies: action.payload }
        case MoviesActionEnum.SET_MOVIE:
            return { ...state, movieInfo: action.payload }
        case MoviesActionEnum.SET_CREDITS:
            return { ...state, credits: action.payload }
        case MoviesActionEnum.SET_SEARCH:
            return { ...state, search: action.payload }
        case MoviesActionEnum.SET_TOP_RATED:
            return { ...state, topRated: action.payload }
        case MoviesActionEnum.SET_UPCOMING:
            return { ...state, topRated: action.payload }
        case MoviesActionEnum.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}
