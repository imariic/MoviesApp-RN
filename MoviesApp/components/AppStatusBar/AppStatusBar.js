import React, { useContext } from "react";
import { StatusBar, View } from "react-native";
import { StyleContext } from "../../context/contexts";

const AppStatusBar = () => {
    const statusBarStyle = useContext(StyleContext);

    return (
        <View>
            <StatusBar backgroundColor={statusBarStyle} />
        </View>
    );
}


export default AppStatusBar;