import { DropdownMenuItemActionType, DropdownMenuItemEnum, DropdownMenuItemState } from "./types"


const initialState = {
    titleMovie: '',
    menuMovie: '',
    titleTV: '',
    menuTV: '',
}

export const dropdownMenuItemReducer = (state = initialState, action: DropdownMenuItemActionType): DropdownMenuItemState => {
    switch (action.type) {
        case DropdownMenuItemEnum.SET_TITLE_MOVIE:
            return { ...state, titleMovie: action.payload }
        case DropdownMenuItemEnum.SET_MENU_MOVIE:
            return { ...state, menuMovie: action.payload }
        case DropdownMenuItemEnum.SET_TITLE_TV:
            return { ...state, titleTV: action.payload }
        case DropdownMenuItemEnum.SET_MENU_TV:
            return { ...state, menuTV: action.payload }
        default:
            return state
    }
}
