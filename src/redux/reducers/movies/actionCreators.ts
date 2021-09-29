import { MovieDBApiService } from '../../../api/api'
import { LoadingActionCreators } from '../loading/actionCreators'
import { AppDispatch } from './../../store/types'
import { MoviesActionEnum, MoviesData, SetMoviesAction } from './types'

export const MoviesActionCreators = {
    setMovies: (payload: MoviesData): SetMoviesAction => ({ type: MoviesActionEnum.SET_MOVIES, payload }),
    getMovies: (search: string = '', page: number = 1) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchMovies(search, page)
            dispatch(MoviesActionCreators.setMovies(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
}
