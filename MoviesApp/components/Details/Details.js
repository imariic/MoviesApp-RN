import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet, Dimensions } from "react-native";
const screen = Dimensions.get("screen");

const Details = ({ route, navigation }) => {
    return (<View style={styles.imageContainer}>
        <Image width={screen.width} height={screen.height / 2} style={styles.image} source={{ uri: `http://image.tmdb.org/t/p/original/${route.params.poster_path}` }} />
    </View>);
}

const styles = StyleSheet.create({
    imageContainer: {
        width: screen.width,
        height: screen.height / 2,
    },
    image: {
        flex: 1,
        resizeMode: "stretch"
    }
});

export default Details;