import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text } from "react-native";

const Movie = (props) => {
    const movie = { ...props.movie };
    const navigation = { ...props.navigation };
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Details", movie)}>
            <Image width={105} height={154.06} style={styles.image} source={{ uri: `http://image.tmdb.org/t/p/original/${movie.poster_path}` }} />
        </TouchableOpacity >)
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