import React from 'react';
import {createAppContainer} from "react-navigation" 
import {createStackNavigator} from "react-navigation-stack"
import HomeScreen from "./screens/HomeScreen"
import DetailsScreen from "./screens/DetailsScreen"

export default function App() {
  return <AppContainer/>
}

const appStackNavigator = createStackNavigator(
  {
    Home : {
      screen : HomeScreen,
      navigationOptions : {
        headerShown : false 
      }
    },
    Details: {
      screen : DetailsScreen,
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(appStackNavigator);
