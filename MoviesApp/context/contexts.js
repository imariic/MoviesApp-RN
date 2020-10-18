import React from "react";
//Context test

const styles = {
    dark: {
        backgroundColor: "#0B253F"
    },
    light: {
        backgroundColor: "cyan"
    }
}

export const StyleContext = React.createContext(styles.dark);
