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
    const pageNumber = useRef(1);

    const debounceSearch = useRef(
        _.debounce(searchTerm => {
            refreshMovies(searchTerm);
        }, 500)
    );

    const refreshMovies = searchTerm => {
        searchMovies(searchTerm, pageNumber.current).then(response => {
            let moviesWithPosterPath = response.filter(movie => movie.poster_path);
            if (pageNumber.current === 1) {
                setFilteredMovies(moviesWithPosterPath);
            } else {
                setFilteredMovies([...filteredMovies, ...moviesWithPosterPath]);
            }
        });
    }

    const fetchMoreMovies = () => {
        pageNumber.current += 1;
        refreshMovies(searchTerm);
    }

    useEffect(
        () => {
            if (searchTerm && searchTerm.length >= 3) {
                debounceSearch.current(searchTerm);
            } else {
                setFilteredMovies([]);
            }
        },
        [searchTerm]
    );

    return [filteredMovies, fetchMoreMovies];

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
