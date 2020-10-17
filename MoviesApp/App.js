import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import { Image, Button } from "react-native";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import AppStatusBar from "./components/AppStatusBar/AppStatusBar";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import movieReducer from "./store/reducers/movieReducer";
import { getMovieGenresAsync } from "./store/actions/movieActions";

const Stack = createStackNavigator();

const store = createStore(movieReducer, applyMiddleware(thunk));

const App = () => {

  useEffect(() => {
    store.dispatch(getMovieGenresAsync());
  });

  return (
    <NavigationContainer>
      <Provider store={store}>
        <AppStatusBar />
        <Stack.Navigator screenOptions={{
          headerTitleAlign: 'center', headerTitle: (props) => (<Image style={{ width: 200, height: 50 }} source={require('./assets/headertitle.png')} resizeMode="contain" />), headerStyle: {
            backgroundColor: '#0B253F',
          },
        }}>
          <Stack.Screen name="TMDB" component={Home} />
          <Stack.Screen options={{
            headerBackImage: () => <Image source={require("./assets/ic_baseline-arrow-back-ios.png")} style={{ width: 24, height: 24 }} />,
          }} name="Details" component={Details} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;