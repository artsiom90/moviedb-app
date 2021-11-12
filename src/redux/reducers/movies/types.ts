export interface Movie {
    backdrop_path: string
    id: number
    overview: string
    release_date: string
    poster_path: string
    title: string
    vote_average: number
    budget: number
    runtime: number
    revenue: number
}
export interface MoviesData {
    page: number
    results: Movie[]
    total_pages: number
    total_results: number
}
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
export interface Cast {
    character: string
    credit_id: string
    name: string
    profile_path: string
}

export interface Crew {
    job: string
    name: string
    credit_id: number
}

export interface Credits {
    id: number
    cast: Cast[]
    crew: Crew[]
}
export interface MoviesState {
    movies: MoviesData
    movieInfo: Movie
    tvShows: TVShowData
    tvShowsInfo: TVShow
    credits: Credits
    search: string
    currentPage: number
}
export enum MoviesActionEnum {
    SET_MOVIES = 'SET_MOVIES',
    SET_MOVIE = 'SET_MOVIE',
    SET_TV_SHOWS = 'SET_TV_SHOWS',
    SET_TV_SHOW = 'SET_TV_SHOW',
    SET_CREDITS = 'SET_CREDITS',
    SET_SEARCH = 'SET_SEARCH',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
}
export interface SetMoviesAction {
    type: MoviesActionEnum.SET_MOVIES
    payload: MoviesData
}
export interface SetMovieAction {
    type: MoviesActionEnum.SET_MOVIE
    payload: Movie
}
export interface SetTVShowsAction {
    type: MoviesActionEnum.SET_TV_SHOWS
    payload: TVShowData
}
export interface SetTVShowAction {
    type: MoviesActionEnum.SET_TV_SHOW
    payload: TVShow
}
export interface SetCreditsAction {
    type: MoviesActionEnum.SET_CREDITS
    payload: Credits
}
export interface SetSearchAction {
    type: MoviesActionEnum.SET_SEARCH
    payload: string
}
export interface SetCurrentPageAction {
    type: MoviesActionEnum.SET_CURRENT_PAGE
    payload: number
}
export type MoviesActionType =
    SetMoviesAction |
    SetMovieAction |
    SetTVShowAction |
    SetTVShowsAction |
    SetCreditsAction |
    SetSearchAction |
    SetCurrentPageAction
