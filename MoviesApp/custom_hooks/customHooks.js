import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../api/axiosInstance";
const usePopularMovies = () => {
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

export default usePopularMovies;