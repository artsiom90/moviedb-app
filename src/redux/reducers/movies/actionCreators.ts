import { MovieDBApiService } from '../../../api/api'
import { LoadingActionCreators } from '../loading/actionCreators'
import { AppDispatch } from './../../store/types'
import { Movie, MoviesActionEnum, SetMoviesAction } from './types'

export const MoviesActionCreators = {
    setMovies: (payload: Movie[]): SetMoviesAction => ({ type: MoviesActionEnum.SET_MOVIES, payload }),
    getMovies: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(false))
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchMovies()
            const data = response.data.results
            dispatch(MoviesActionCreators.setMovies(data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
}
