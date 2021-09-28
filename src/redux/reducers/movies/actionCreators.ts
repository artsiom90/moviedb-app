import { MovieDBApiService } from '../../../api/api'
import { AppDispatch } from './../../store/types'
import { Movie, MoviesActionEnum, SetMoviesAction } from './types'

export const MoviesActionCreators = {
    setMovies: (payload: Movie[]): SetMoviesAction => ({ type: MoviesActionEnum.SET_MOVIES, payload }),
    getMovies: () => async (dispatch: AppDispatch) => {
        try {
            const response = await MovieDBApiService.fetchMovies()
            const data = response.data.results
            dispatch(MoviesActionCreators.setMovies(data))
        } catch (error) {
            console.log(error)
        }
    }
}
