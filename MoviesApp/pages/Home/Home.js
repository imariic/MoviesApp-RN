import React, { useState } from "react";
import { View, Text } from "react-native";
import Search from "../../components/Search/Search";
import PopularMoviesList from "../../components/PopularMoviesList/PopularMoviesList";
import FilteredMoviesList from "../../components/FilteredMoviesList/FilteredMoviesList";

const Home = ({ navigation }) => {

    const [searchParam, setSearchParam] = useState("");

    return (
        <View>
            <Search searchParam={searchParam} setSearchParam={setSearchParam} />
            {searchParam.length < 3 ? <PopularMoviesList navigation={navigation} searchParam={searchParam} /> : <FilteredMoviesList navigation={navigation} searchParam={searchParam} />}
        </View>);
}

export default Home;