import React, { useEffect, useRef, useState } from "react";
import { getPopularMovies, getMovieCredits, searchMovies } from "../api/axiosInstance";
import _ from "lodash";
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

export const useFilterMovies = searchTerm => {
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const debounceSearch = useRef(
        _.debounce(searchTerm => {
            searchMovies(searchTerm, pageNumber).then(response => {
                if (pageNumber === 1) {
                    setFilteredMovies(response);
                } else {
                    setFilteredMovies([...filteredMovies, ...response]);
                }
            });

        }, 500)
    );

    const fetchMoreMovies = () => {
        setPageNumber(pageNumber + 1);
    }

    useEffect(
        () => {
            if (searchTerm && searchTerm.length === 3) {
                debounceSearch.current(searchTerm);
            } else {
                setFilteredMovies([]);
            }
        },
        [searchTerm, pageNumber]
    );

    return [filteredMovies, fetchMoreMovies, debounceSearch];

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
