export interface Movie {
    backdrop_path: string
    id: number
    overview: string
    popularity: number
    poster_path: string
    title: string
    vote_average: number
    vote_count: number
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
}
export enum MoviesActionEnum {
    SET_MOVIES = 'SET_MOVIES',
}
export interface SetMoviesAction {
    type: MoviesActionEnum.SET_MOVIES
    payload: MoviesData
}
export type MoviesActionType = SetMoviesAction
