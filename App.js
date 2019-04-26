import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import HomeComponent from './components/draws/HomeComponent';
import SettingComponent from './components/draws/SettingComponent';


let drawerNavigationOptions = {
  initialRouteName: 'Home',
  order: ['Setting', 'Home'],
  hideStatusBar: false
}

const MyNavigation = createDrawerNavigator({
  Home: {
    screen : HomeComponent
  },
  Setting: {
    screen : SettingComponent
  }
}, drawerNavigationOptions
)
const MyAppContainer = createAppContainer(MyNavigation);

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.barStatus}></View>
        <MyAppContainer/>
      </View>
      
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  barStatus: {
    backgroundColor: 'darkslategrey',
    height: 24
  }
});
