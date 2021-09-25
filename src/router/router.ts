import { ComponentType } from "react"
import Login from "../pages/Login"
import MainPage from "../pages/MainPage"

export interface Route {
    path: string
    component: ComponentType
    exact?: boolean
}
export enum RouteNames {
    MAIN_PAGE = '/',
    LOGIN = '/login',
}

export const publicRoutes: Route[] = [
    { path: RouteNames.LOGIN, component: Login, exact: true },
]

export const privateRoutes: Route[] = [
    { path: RouteNames.MAIN_PAGE, component: MainPage, exact: true },
]
