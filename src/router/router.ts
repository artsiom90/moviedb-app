import { ComponentType } from "react"
import MovieInfoPage from "../pages/MovieInfoPage"
import Login from "../pages/LoginPage"
import MainPage from "../pages/MainPage"
import TVShowsPage from "../pages/TVShowsPage"
import TVShowInfoPage from "../pages/TVShowInfoPage"

export interface Route {
    path: string
    component: ComponentType
    exact?: boolean
}
export enum RouteNames {
    MAIN_PAGE = '/',
    TV_SHOWS_PAGE = '/shows',
    LOGIN_PAGE = '/login',
    MOVIE_PAGE = '/movie/:id',
    TVSHOW_PAGE = '/show/:id',
}

export const publicRoutes: Route[] = [
    { path: RouteNames.LOGIN_PAGE, component: Login, exact: true },
]

export const privateRoutes: Route[] = [
    { path: RouteNames.MAIN_PAGE, component: MainPage, exact: true },
    { path: RouteNames.TV_SHOWS_PAGE, component: TVShowsPage, exact: true },
    { path: RouteNames.MOVIE_PAGE, component: MovieInfoPage, exact: true },
    { path: RouteNames.TVSHOW_PAGE, component: TVShowInfoPage, exact: true },
]
