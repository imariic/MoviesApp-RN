import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Image } from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStatusBar from "./components/AppStatusBar/AppStatusBar";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStatusBar />
      <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center', headerTitle: (props) => (<Image style={{ width: 200, height: 50 }} source={require('./assets/headertitle.png')} resizeMode="contain" />), headerStyle: {
          backgroundColor: '#0B253F',
        }
      }}>
        <Stack.Screen name="TMDB" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;