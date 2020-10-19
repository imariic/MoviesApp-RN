import React, { useEffect } from "react";
import { usePopularMovies } from "../../custom_hooks/customHooks";
import MoviesList from "../MoviesList/MoviesList";

const PopularMoviesList = ({ navigation, searchParam }) => {
    const [popularMovies, fetchMoreMovies, refreshMovies] = usePopularMovies();

    useEffect(() => {
        fetchMoreMovies();
    }, [])

    return (<MoviesList title="What's popular" movies={popularMovies} navigation={navigation} fetchMoreMovies={fetchMoreMovies} />)

}

export default PopularMoviesList;