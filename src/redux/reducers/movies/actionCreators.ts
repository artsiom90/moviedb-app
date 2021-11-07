import { MovieDBApiService } from '../../../api/api'
import { LoadingActionCreators } from '../loading/actionCreators'
import { AppDispatch } from './../../store/types'
import { Credits, Movie, MoviesActionEnum, MoviesData, SetCreditsAction, SetMovieAction, SetMoviesAction, SetSearchAction } from './types'

export const MoviesActionCreators = {
    setMovies: (payload: MoviesData): SetMoviesAction => ({ type: MoviesActionEnum.SET_MOVIES, payload }),
    setMovie: (payload: Movie): SetMovieAction => ({ type: MoviesActionEnum.SET_MOVIE, payload }),
    setCredits: (payload: Credits): SetCreditsAction => ({ type: MoviesActionEnum.SET_CREDITS, payload }),
    setSearch: (payload: string): SetSearchAction => ({ type: MoviesActionEnum.SET_SEARCH, payload }),
    setCurrentPage: (payload: number) => ({ type: MoviesActionEnum.SET_CURRENT_PAGE, payload }),
    getPopularMovies: (page: number = 1) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchPopularMovies(page)
            dispatch(MoviesActionCreators.setMovies(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getTopRatedMovies: (page: number = 1) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchTopRatedMovies(page)
            dispatch(MoviesActionCreators.setMovies(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getUpcomingMovies: (page: number = 1) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchUpcomingMovies(page)
            dispatch(MoviesActionCreators.setMovies(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getMovie: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchMovie(id)
            dispatch(MoviesActionCreators.setMovie(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getCredits: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchCredits(id)
            dispatch(MoviesActionCreators.setCredits(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getSearchedMovies: (page: number = 1, search: string = '') => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.searchMovies(page, search)
            dispatch(MoviesActionCreators.setMovies(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
}
