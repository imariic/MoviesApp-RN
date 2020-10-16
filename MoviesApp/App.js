import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home/Home";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTintColor: "cyan" }}>
        <Stack.Screen options={{
          headerTitle: (props) => (<Image style={{ width: 200, height: 50 }} source={require('./assets/headertitle.png')} resizeMode="contain" />), headerStyle: {
            backgroundColor: '#0B253F',
          },
        }} name="TMDB" component={Home}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;