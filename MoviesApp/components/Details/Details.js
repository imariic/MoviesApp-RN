import React, { useEffect } from "react";
import { View, Text, FlatList, ImageBackground, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { useMovieCreditsEffect } from "../../custom_hooks/customHooks";
const screen = Dimensions.get("screen");

const Details = ({ route, navigation, movieGenres }) => {

    const [movieCredits, getMovieCreditsAsync] = useMovieCreditsEffect(route.params.id);

    const printMovieGenres = () => {
        let movieGenresIds = route.params.genre_ids.map(item => item.toString());
        let movieGenreHashMap = {};
        let genreNames = [];
        for (let genre of movieGenres) {
            movieGenreHashMap[genre.id] = genre.name;
        }

        for (let genreId of movieGenresIds) {
            if (movieGenreHashMap[genreId] !== null) {
                genreNames.push(movieGenreHashMap[genreId]);
            }
        }
        return genreNames.map((genre, index) => {
            return index === genreNames.length - 1 ? genre : genre + ', '
        });
    }


    return (<View style={styles.imageContainer}>
        <ImageBackground resizeMode={"stretch"} width={screen.width} height={screen.height / 2} style={styles.image} source={{ uri: `http://image.tmdb.org/t/p/original/${route.params.poster_path}` }} >
            <View style={{ flexDirection: "column" }}>
                <Text style={styles.title}>{route.params.title}</Text>
                <Text style={styles.details}>{route.params.release_date}</Text>
                <Text style={styles.details}>{printMovieGenres()} <Text style={styles.voteAverage}>{route.params.vote_average}</Text></Text>
            </View>
        </ImageBackground>
        <View>
            <Text style={styles.overviewTitle}>Overview</Text>
            <Text style={styles.overviewContent}>{route.params.overview}</Text>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    imageContainer: {
        width: screen.width,
        height: screen.height / 2,
    },
    image: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection: "row",
    },
    title: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        marginLeft: 16,
    },
    details: {
        fontSize: 14,
        color: "white",
        marginLeft: 16,
        marginBottom: 12,
    },
    voteAverage: {
        fontSize: 16,
        fontWeight: "bold",
    },
    overviewTitle: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 18,
        color: "#0B253F",
        fontWeight: "500",
    },
    overviewContent: {
        marginLeft: 18,
        marginRight: 27,
        fontWeight: "400"
    }
});
const mapStateToProps = state => {
    return {
        movieGenres: state.movieGenres,
    }
}
export default connect(mapStateToProps)(Details);