export interface DropdownMenuItemState {
    titleMovie: string,
    menuMovie: string,
    titleTV: string,
    menuTV: string,
}
export enum DropdownMenuItemEnum {
    SET_TITLE_MOVIE = 'SET_TITLE_MOVIE',
    SET_MENU_MOVIE = 'SET_MENU_MOVIE',
    SET_TITLE_TV = 'SET_TITLE_MOVIE_TV',
    SET_MENU_TV = 'SET_MENU_TV',
}
export interface SetTitleMovieAction {
    type: DropdownMenuItemEnum.SET_TITLE_MOVIE
    payload: string
}
export interface SetMenuMovieAction {
    type: DropdownMenuItemEnum.SET_MENU_MOVIE
    payload: string
}
export interface SetTitleTVAction {
    type: DropdownMenuItemEnum.SET_TITLE_TV
    payload: string
}
export interface SetMenuTVAction {
    type: DropdownMenuItemEnum.SET_MENU_TV
    payload: string
}
export type DropdownMenuItemActionType =
    SetTitleMovieAction |
    SetMenuMovieAction |
    SetTitleTVAction |
    SetMenuTVAction
