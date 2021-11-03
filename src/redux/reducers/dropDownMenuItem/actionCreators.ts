import { DropdownMenuItemEnum, SetMenuAction, SetTitleAction } from "./types";

export const DropdownMenuItemActionCreators = {
    setDropdownTitle: (title: string): SetTitleAction => ({ type: DropdownMenuItemEnum.SET_TITLE, payload: title }),
    setDropdownMenu: (menu: string): SetMenuAction => ({ type: DropdownMenuItemEnum.SET_MENU, payload: menu }),
}
