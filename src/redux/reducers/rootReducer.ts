import { moviesReducer } from './movies/movies'
import { authReducer } from './auth/auth'
import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    auth: authReducer,
    movies: moviesReducer,
})
