import React, { useEffect } from "react";
import { useFilterMovies } from "../../custom_hooks/customHooks";
import MoviesList from "../MoviesList/MoviesList";

const FilteredMoviesList = ({ navigation, searchParam }) => {
    const [filteredMovies, fetchMoreMovies] = useFilterMovies(searchParam);

    return (<MoviesList title={`Showing ${filteredMovies.length} results`} movies={filteredMovies} navigation={navigation} fetchMoreMovies={fetchMoreMovies} />)

}

export default FilteredMoviesList;