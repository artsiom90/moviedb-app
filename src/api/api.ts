import axios from "axios"

export const API_URL: string = 'https://api.themoviedb.org/3/'
export const API_KEY: string | undefined = 'd2b478aa3c60bdcc5ab5272c8aeef917'

export class MovieDBApiService {
    static async fetchMovies() {
        const response = await axios.get(`${API_URL}search/movie?api_key=${API_KEY}&query=''&page=1`)
        return response
    }
}
