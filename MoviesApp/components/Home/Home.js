import React from "react";
import { View, Text } from "react-native";
import Search from "../Search/Search";
import MovieList from "../MovieList/MovieList";

const Home = ({ navigation }) => {

    return (
        <View>
            <Search />
            <MovieList navigation={navigation} />
        </View>);
}

export default Home;