import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/constants";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        contentType: 'application/json'
    }
})

export const getPopularMovies = async (pageNumber = 1) => {
    let popularMovies = [];

    await axiosInstance.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
        .then(response => {
            popularMovies = response.data.results;
        })
        .catch(e => console.log(e));


    return popularMovies;
}

export const getMovieGenres = async () => {
    let movieGenres = [];

    await axiosInstance.get(`genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            movieGenres = response.data.genres;
        })
        .catch(e => console.log(e));

    return movieGenres;
}

export const getMovieCredits = async movieId => {
    let movieCredits = [];

    await axiosInstance.get(`movie/${movieId}/credits?api_key=${API_KEY}`)
        .then(response => {
            movieCredits = response.data.cast;
        })
        .catch(e => console.log(e));

    return movieCredits;
}