import { dropdownMenuItemReducer } from './dropDownMenuItem/dropdownMenuItem';
import { moviesReducer } from './movies/movies'
import { authReducer } from './auth/auth'
import { combineReducers } from "redux"
import { loadingReducer } from './loading/loading'

export const rootReducer = combineReducers({
    auth: authReducer,
    movies: moviesReducer,
    loading: loadingReducer,
    dropdown: dropdownMenuItemReducer,
})
