import { MovieDBApiService } from '../../../api/api'
import { LoadingActionCreators } from '../loading/actionCreators'
import { AppDispatch } from './../../store/types'
import { SetTVShowAction, SetTVShowsAction, TVShow, TVShowData, TVShowsActionEnum } from './types'

export const TVShowsActionCreators = {
    setTVShows: (payload: TVShowData): SetTVShowsAction => ({ type: TVShowsActionEnum.SET_TV_SHOWS, payload }),
    setTVShow: (payload: TVShow): SetTVShowAction => ({ type: TVShowsActionEnum.SET_TV_SHOW, payload }),
    getPopularTVShows: (page: number = 1) => async (dispatch: AppDispatch) => {
        try {
            dispatch(LoadingActionCreators.setIsLoading(true))
            const response = await MovieDBApiService.fetchPopularTVShows(page)
            dispatch(TVShowsActionCreators.setTVShows(response.data))
            dispatch(LoadingActionCreators.setIsLoading(false))
        } catch (error) {
            dispatch(LoadingActionCreators.setIsLoading(false))
            console.log(error)
        }
    },
}
