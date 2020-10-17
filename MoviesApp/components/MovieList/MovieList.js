import React, { useEffect } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import Movie from "../Movie/Movie";
import usePopularMovies from "../../custom_hooks/customHooks";

const MovieList = () => {
    const [popularMovies, fetchMoreMovies, refreshMovies] = usePopularMovies();

    useEffect(() => {
        fetchMoreMovies();
    }, [])

    return (
        <View styles={styles.container}>
            <Text style={styles.title}>What's popular</Text>
            <View style={styles.flatListContainer}>
                <FlatList
                    data={popularMovies}
                    renderItem={({ item }) => <Movie movie={item} />} keyExtractor={item => item.title}
                    extraData={popularMovies}
                    numColumns="3" />
            </View>
        </View>)

}

const styles = StyleSheet.create({
    container: {
        marginTop: 68,
    },
    title: {
        marginBottom: 20,
        marginTop: 85 - 20,
        marginLeft: 18,
        color: "#0B253F",
        fontWeight: "500",
        fontSize: 20,
    },
    flatListContainer: {
        alignItems: "center",
        justifyContent: "center",
    }
});


export default MovieList;