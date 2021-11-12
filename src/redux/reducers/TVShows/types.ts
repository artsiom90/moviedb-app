export interface TVShow {
    backdrop_path: string
    id: number
    overview: string
    first_air_date: string
    poster_path: string
    name: string
    vote_average: number
}
export interface TVShowData {
    page: number
    results: TVShow[]
    total_pages: number
    total_results: number
}
export interface TVShowState {
    tvShows: TVShowData
    tvShowsInfo: TVShow
}
export enum TVShowsActionEnum {
    SET_TV_SHOWS = 'SET_TV_SHOWS',
    SET_TV_SHOW = 'SET_TV_SHOW',
}

export interface SetTVShowsAction {
    type: TVShowsActionEnum.SET_TV_SHOWS
    payload: TVShowData
}
export interface SetTVShowAction {
    type: TVShowsActionEnum.SET_TV_SHOW
    payload: TVShow
}
export type TVShowsActionType =
    SetTVShowAction |
    SetTVShowsAction
