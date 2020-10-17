import React, { useEffect } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import Movie from "../Movie/Movie";
import { usePopularMovies } from "../../custom_hooks/customHooks";

const MovieList = ({ navigation }) => {
    const [popularMovies, fetchMoreMovies, refreshMovies] = usePopularMovies();

    useEffect(() => {
        fetchMoreMovies();
    }, [])

    return (
        <View style={styles.flatListContainer}>
            <FlatList
                ListHeaderComponent={() => <Text style={styles.title}>What's popular</Text>}
                data={popularMovies}
                renderItem={({ item }) => <Movie movie={item} navigation={navigation} />} keyExtractor={item => item.title}
                extraData={popularMovies}
                numColumns="3"
                showsVerticalScrollIndicator={false}
                onEndReached={fetchMoreMovies}
                onEndReachedThreshold={0.5} />
        </View>)

}

const styles = StyleSheet.create({
    title: {
        marginBottom: 20,
        marginTop: 85 - 20,
        marginLeft: 0,
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