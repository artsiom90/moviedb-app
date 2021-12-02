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
    in_production: boolean
    first_air_date: string
    last_air_date: string
    episode_run_time: number
    number_of_episodes: number
    number_of_seasons: number
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
    id: number
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
export interface Person {
    id: number
    name: string
    birthday: string | null
    deathday: string | null
    biography: string
    popularity: number
    place_of_birth: string | null
    profile_path: string | null
}
export interface MoviesState {
    movies: MoviesData
    movieInfo: Movie
    tvShows: TVShowData
    tvShowsInfo: TVShow
    credits: Credits
    person: Person
    search: string
    currentPage: number
}
export enum MoviesActionEnum {
    SET_MOVIES = 'SET_MOVIES',
    SET_MOVIE = 'SET_MOVIE',
    SET_TV_SHOWS = 'SET_TV_SHOWS',
    SET_TV_SHOW = 'SET_TV_SHOW',
    SET_CREDITS = 'SET_CREDITS',
    SET_PERSON = 'SET_PERSON',
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
export interface SetPersonAction {
    type: MoviesActionEnum.SET_PERSON
    payload: Person
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
    SetPersonAction |
    SetSearchAction |
    SetCurrentPageAction
