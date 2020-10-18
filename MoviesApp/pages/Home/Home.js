import React, { useState } from "react";
import { View, Text } from "react-native";
import Search from "../../components/Search/Search";
import MovieList from "../../components/MovieList/MovieList";
import FilteredMovieList from "../../components/FilteredMovieList/FilteredMovieList";

const Home = ({ navigation }) => {

    const [searchParam, setSearchParam] = useState("");

    return (
        <View>
            <Search searchParam={searchParam} setSearchParam={setSearchParam} />
            {searchParam.length < 3 ? <MovieList navigation={navigation} searchParam={searchParam} /> : <FilteredMovieList navigation={navigation} searchParam={searchParam} />}
        </View>);
}

export default Home;