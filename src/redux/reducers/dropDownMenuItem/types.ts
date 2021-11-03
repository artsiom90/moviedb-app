export interface DropdownMenuItemState {
    title: string,
    menu: string,
}
export enum DropdownMenuItemEnum {
    SET_TITLE = 'SET_TITLE',
    SET_MENU = 'SET_MENU',
}
export interface SetTitleAction {
    type: DropdownMenuItemEnum.SET_TITLE
    payload: string
}
export interface SetMenuAction {
    type: DropdownMenuItemEnum.SET_MENU
    payload: string
}
export type DropdownMenuItemActionType =
    SetTitleAction |
    SetMenuAction
