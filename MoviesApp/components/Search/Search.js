import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";

const Search = props => {

    const [searchParam, setSearchParam] = useState("");
    /*useEffect(() => {
        props.filterArticles(searchParam)
    }, [searchParam]);*/

    return (<View style={styles.container}>
        <TextInput value={searchParam} onChangeText={value => setSearchParam(value)} placeholder="Search" placeholderTextColor="black" style={styles.textInput} />
    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        marginLeft: "auto",
        marginRight: "auto",
        height: 43,
        width: 323,
        flexDirection: 'row',
    },
    icon: {
        width: 20,
        height: 20,
    },
    textInput: {
        height: 43,
        width: 323,
        borderRadius: 10,
        backgroundColor: "#EAEAEB",
        color: "black"
    }
});



export default Search;