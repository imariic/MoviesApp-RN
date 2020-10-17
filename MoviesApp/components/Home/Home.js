import React from "react";
import { View, Text } from "react-native";
import Search from "../Search/Search";
import MovieList from "../MovieList/MovieList";

const Home = () => {

    return (
        <View>
            <Search />
            <MovieList />
        </View>);
}

export default Home;