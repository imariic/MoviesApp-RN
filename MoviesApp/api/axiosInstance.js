import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/constants";

const axiosInstance = axios.create({
    headers: {
        contentType: 'application/json'
    }
})

export const getPopularMovies = async (pageNumber = 1) => {
    let popularMovies = [];

    await axiosInstance.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
        .then(response => {
            popularMovies = response.data.results;
        })
        .catch(e => console.log(e));


    return popularMovies;
}