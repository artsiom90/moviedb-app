import { Credits, Movie, MoviesActionEnum, MoviesActionType, MoviesData, MoviesState, TVShow, TVShowData } from './types'

const initialState = {
    movies: {} as MoviesData,
    movieInfo: {} as Movie,
    tvShows: {} as TVShowData,
    tvShowsInfo: {} as TVShow,
    credits: {} as Credits,
    search: '',
    currentPage: 1,
}

export const moviesReducer = (state = initialState, action: MoviesActionType): MoviesState => {
    switch (action.type) {
        case MoviesActionEnum.SET_MOVIES:
            return { ...state, movies: action.payload }
        case MoviesActionEnum.SET_MOVIE:
            return { ...state, movieInfo: action.payload }
        case MoviesActionEnum.SET_TV_SHOWS:
            return { ...state, tvShows: action.payload }
        case MoviesActionEnum.SET_TV_SHOW:
            return { ...state, tvShowsInfo: action.payload }
        case MoviesActionEnum.SET_CREDITS:
            return { ...state, credits: action.payload }
        case MoviesActionEnum.SET_SEARCH:
            return { ...state, search: action.payload }
        case MoviesActionEnum.SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        default:
            return state
    }
}
