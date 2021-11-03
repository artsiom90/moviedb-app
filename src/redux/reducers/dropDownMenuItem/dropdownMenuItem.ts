import { DropdownMenuItemActionType, DropdownMenuItemEnum, DropdownMenuItemState } from "./types"


const initialState = {
    title: '',
    menu: '',
}

export const dropdownMenuItemReducer = (state = initialState, action: DropdownMenuItemActionType): DropdownMenuItemState => {
    switch (action.type) {
        case DropdownMenuItemEnum.SET_TITLE:
            return { ...state, title: action.payload }
        case DropdownMenuItemEnum.SET_MENU:
            return { ...state, menu: action.payload }
        default:
            return state
    }
}
