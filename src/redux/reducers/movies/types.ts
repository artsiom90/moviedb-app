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
export interface MoviesState {
    movies: MoviesData
    movieInfo: Movie
    search: string
}
export enum MoviesActionEnum {
    SET_MOVIES = 'SET_MOVIES',
    SET_MOVIE = 'SET_MOVIE',
    SET_SEARCH = 'SET_SEARCH',
}
export interface SetMoviesAction {
    type: MoviesActionEnum.SET_MOVIES
    payload: MoviesData
}
export interface SetMovieAction {
    type: MoviesActionEnum.SET_MOVIE
    payload: Movie
}
export interface SetSearchAction {
    type: MoviesActionEnum.SET_SEARCH
    payload: string
}
export type MoviesActionType =
    SetMoviesAction |
    SetMovieAction |
    SetSearchAction
