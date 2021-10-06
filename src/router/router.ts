import { ComponentType } from "react"
import MovieInfo from "../components/MovieInfo"
import Login from "../pages/Login"
import MainPage from "../pages/MainPage"

export interface Route {
    path: string
    component: ComponentType
    exact?: boolean
}
export enum RouteNames {
    MAIN_PAGE = '/',
    LOGIN_PAGE = '/login',
    MOVIE_PAGE = '/movie/:id',
}

export const publicRoutes: Route[] = [
    { path: RouteNames.LOGIN_PAGE, component: Login, exact: true },
]

export const privateRoutes: Route[] = [
    { path: RouteNames.MAIN_PAGE, component: MainPage, exact: true },
    { path: RouteNames.MOVIE_PAGE, component: MovieInfo, exact: true },
]
