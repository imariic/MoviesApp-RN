import React, { useState } from "react";
import { View, Text } from "react-native";
import Search from "../Search/Search";
import MovieList from "../MovieList/MovieList";
import FilteredMovieList from "../FilteredMovieList/FilteredMovieList";

const Home = ({ navigation }) => {

    const [searchParam, setSearchParam] = useState("");

    return (
        <View>
            <Search searchParam={searchParam} setSearchParam={setSearchParam} />
            {searchParam.length < 3 ? <MovieList navigation={navigation} searchParam={searchParam} /> : <FilteredMovieList searchParam={searchParam} />}
        </View>);
}

export default Home;