import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

const Search = props => {

    const [searchParam, setSearchParam] = useState("");
    /*useEffect(() => {
        props.filterArticles(searchParam)
    }, [searchParam]);*/

    return (<View style={styles.container}>
        <Image source={require("../../assets/baseline_search_black_18dp.png")} />
        <TextInput onChangeText={value => console.log(value)} placeholder="Search" placeholderTextColor="black" style={styles.textInput} />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: 20,
        height: 43,
        width: 323,
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        width: 20,
        height: 20,
    },
    textInput: {
        flex: 1,
        height: 43,
        width: 323,
        borderRadius: 10,
        backgroundColor: "#EAEAEB",
    }
});



export default Search;