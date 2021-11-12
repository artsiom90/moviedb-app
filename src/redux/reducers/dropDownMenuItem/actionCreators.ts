import { DropdownMenuItemEnum, SetTitleMovieAction, SetMenuMovieAction, SetTitleTVAction, SetMenuTVAction } from "./types"

export const DropdownMenuItemActionCreators = {
    setDropdownMovieTitle: (title: string): SetTitleMovieAction => ({ type: DropdownMenuItemEnum.SET_TITLE_MOVIE, payload: title }),
    setDropdownMovieMenu: (menu: string): SetMenuMovieAction => ({ type: DropdownMenuItemEnum.SET_MENU_MOVIE, payload: menu }),
    setDropdownTVTitle: (title: string): SetTitleTVAction => ({ type: DropdownMenuItemEnum.SET_TITLE_TV, payload: title }),
    setDropdownTVMenu: (menu: string): SetMenuTVAction => ({ type: DropdownMenuItemEnum.SET_MENU_TV, payload: menu }),
}
