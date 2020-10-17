import React, { useEffect, useState } from "react";
import { getPopularMovies, getMovieCredits } from "../api/axiosInstance";
export const usePopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        const getPopularMoviesUseEffect = async () => {
            await refreshMovies();
        }
        getPopularMoviesUseEffect();
    }, [pageNumber])

    const fetchMoreMovies = () => {
        setPageNumber(pageNumber + 1);
    }

    const refreshMovies = async () => {
        let movies = await getPopularMovies(pageNumber);
        if (pageNumber === 1) {
            setPopularMovies(movies);
        } else {
            setPopularMovies([...popularMovies, ...movies]);
        }

    }

    return [popularMovies, fetchMoreMovies, refreshMovies];

}

export const useMovieCreditsEffect = movieId => {
    const [movieCredits, setMovieCredits] = useState([]);

    const getMovieCreditsAsync = async () => {
        const credits = await getMovieCredits(movieId);
        setMovieCredits(credits);
    }

    useEffect(() => {
        getMovieCreditsAsync();
    }, [])

    return [movieCredits, getMovieCreditsAsync];

}
