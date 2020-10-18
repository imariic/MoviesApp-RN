import React from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";

const Search = props => {

    return (<View style={styles.container}>
        <TextInput value={props.searchParam} onChangeText={value => props.setSearchParam(value)} placeholder="Search" placeholderTextColor="black" style={styles.textInput} />
        {props.searchParam ? <TouchableOpacity onPress={() => props.setSearchParam("")} style={styles.button} title="Cancel"><Text style={{ fontSize: 16, fontWeight: "400" }}>Cancel</Text></TouchableOpacity> : null}
    </View>)
}

const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        marginLeft: "auto",
        marginRight: "auto",
        height: 43,
        flexDirection: 'row',
        alignItems: "center"
    },
    icon: {
        width: 20,
        height: 20,
    },
    textInput: {
        height: 43,
        width: 258,
        borderRadius: 10,
        marginRight: 17,
        backgroundColor: "#EAEAEB",
        color: "black"
    },
    button: {
        height: 19,
        width: 49,
        color: "#0B253F",
    }
});



export default Search;