import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator,createAppContainer}from "react-navigation"
import Login from "./Login"
import Login1 from "./Login1"

 class App extends React.Component {
  render() {
    return (
      <Navigator/>
    );
  }


}

const Navigator = createStackNavigator({
  Login1:{
    screen:Login1
  },
  Login:{
    screen:Login
  },

})

export default createAppContainer(Navigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
