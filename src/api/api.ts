import axios from "axios"

export const API_URL: string = 'https://api.themoviedb.org/3/'
export const API_KEY: string | undefined = 'd2b478aa3c60bdcc5ab5272c8aeef917'
export const IMG_URL: string = 'http://image.tmdb.org/t/p/w500'

export class MovieDBApiService {
    static async fetchMovies(search: string, page: number) {
        if (!search) {
            const response = await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
            return response
        } else {
            const response = await axios.get(`${API_URL}search/movie?api_key=${API_KEY}&query=${search}&page=${page}`)
            return response
        }
    }
}
