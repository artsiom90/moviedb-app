import { MovieDBApiService } from '../../../api/api'
import { LoadingActionCreators } from '../loading/actionCreators'
import { AppDispatch } from './../../store/types'
import { Credits, Movie, MoviesActionEnum, MoviesData, Person, SetCreditsAction, SetMovieAction, SetMoviesAction, SetPersonAction, SetSearchAction, SetTVShowAction, SetTVShowsAction, TVShow, TVShowData } from './types'

export const MoviesActionCreators = {
    setMovies: (payload: MoviesData): SetMoviesAction => ({ type: MoviesActionEnum.SET_MOVIES, payload }),
    setMovie: (payload: Movie): SetMovieAction => ({ type: MoviesActionEnum.SET_MOVIE, payload }),
    setTVShows: (payload: TVShowData): SetTVShowsAction => ({ type: MoviesActionEnum.SET_TV_SHOWS, payload }),
    setTVShow: (payload: TVShow): SetTVShowAction => ({ type: MoviesActionEnum.SET_TV_SHOW, payload }),
    setCredits: (payload: Credits): SetCreditsAction => ({ type: MoviesActionEnum.SET_CREDITS, payload }),
    setPerson: (payload: Person): SetPersonAction => ({ type: MoviesActionEnum.SET_PERSON, payload }),
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
    getPopularTVShows: (page: number = 1) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchPopularTVShows(page)
            dispatch(MoviesActionCreators.setTVShows(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getTopRatedTVShows: (page: number = 1) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchTopRatedTVShows(page)
            dispatch(MoviesActionCreators.setTVShows(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getLatestTVShows: (page: number = 1) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchOnTheAirTVShows(page)
            dispatch(MoviesActionCreators.setTVShows(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getTvShow: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchTvShow(id)
            dispatch(MoviesActionCreators.setTVShow(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getMoviesCredits: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchMoviesCredits(id)
            dispatch(MoviesActionCreators.setCredits(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getTvShowCredits: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchTVShowsCredits(id)
            dispatch(MoviesActionCreators.setCredits(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
    getPerson: (id: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchPerson(id)
            dispatch(MoviesActionCreators.setPerson(response.data))
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
