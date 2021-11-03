import axios from "axios"

export const API_URL: string = 'https://api.themoviedb.org/3/'
export const API_KEY: string | undefined = 'd2b478aa3c60bdcc5ab5272c8aeef917'
export const IMG_BASE_URL: string = 'http://image.tmdb.org/t/p/'


export class MovieDBApiService {
    static async fetchPopularMovies(page: number) {
        const response = await axios.get(`${API_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
        return response
    }
    static async fetchTopRatedMovies(page: number) {
        const response = await axios.get(`${API_URL}movie/top_rated?api_key=${API_KEY}&page=${page}`)
        return response
    }
    static async fetchUpcomingMovies(page: number) {
        const response = await axios.get(`${API_URL}movie/upcoming?api_key=${API_KEY}&page=${page}`)
        return response
    }
    static async fetchMovie(id: string) {
        const response = await axios.get(`${API_URL}movie/${id}?api_key=${API_KEY}`)
        return response
    }
    static async fetchCredits(id: string) {
        const response = await axios.get(`${API_URL}movie/${id}/credits?api_key=${API_KEY}`)
        return response
    }
    static async searchMovies(page: number, search: string) {
        const response = await axios.get(`${API_URL}search/movie?api_key=${API_KEY}&query=${search}&page=${page}`)
        return response
    }
}
