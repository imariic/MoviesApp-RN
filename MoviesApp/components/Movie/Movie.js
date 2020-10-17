import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Movie = ({ movie }) => {

    return (
        <View>
            <Image width={105} height={154.06} style={styles.image} source={{ uri: `http://image.tmdb.org/t/p/original/${movie.poster_path}` }} />
        </View>)
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 10,
        width: 105,
        height: 154.06,
        margin: 5,
        marginBottom: 35,
    }
})

export default Movie;