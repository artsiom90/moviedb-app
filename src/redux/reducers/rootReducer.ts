import { dropdownMenuItemReducer } from './dropDownMenuItem/dropdownMenuItem'
import { moviesReducer } from './movies/movies'
import { authReducer } from './auth/auth'
import { combineReducers } from "redux"
import { loadingReducer } from './loading/loading'
import { tvShowsReducer } from './TVShows/tvShows'

export const rootReducer = combineReducers({
    auth: authReducer,
    movies: moviesReducer,
    tvShows: tvShowsReducer,
    loading: loadingReducer,
    dropdown: dropdownMenuItemReducer,
})
