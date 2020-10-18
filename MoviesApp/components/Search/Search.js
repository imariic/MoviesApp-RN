import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Search = props => {

    return (<View style={styles.container}>
        <TextInput value={props.searchParam} onChangeText={value => props.setSearchParam(value)} placeholder="Search" placeholderTextColor="black" style={styles.textInput} />
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