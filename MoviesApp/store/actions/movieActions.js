import { getMovieGenres } from "../../api/axiosInstance";


export const getMovieGenresAsync = () => async dispatch => {
    try {
        let movieGenres = await getMovieGenres();
        dispatch(movieGenresAction(movieGenres));
    } catch (error) {
        console.log(error);
        dispatch(movieGenresAction([]))
    }
}




const movieGenresAction = movieGenres => {
    return {
        type: "GET_MOVIE_GENRES",
        payload: movieGenres,
    }
}