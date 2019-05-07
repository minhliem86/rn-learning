import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import HomeComponent from './components/draws/HomeComponent';
import SettingComponent from './components/draws/SettingComponent';

/* REDUX */
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

/* REDUX SAGA */
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();


/* REDUX COMPONENT */
// import TaskComponent from './components/tasks/TaskComponent';
import CounterComponent from './components/counter/CounterComponent';
import SagaContainer from './containers/SagaContainer';


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
  },
  drawerNavigationOptions
)
const MyAppContainer = createAppContainer(MyNavigation);

// REDUX STORE
let store = createStore(allReducers, composeWithDevTools ( applyMiddleware(sagaMiddleware)) );

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <View style={styles.container}>
          <View style={styles.barStatus}></View>
          <SagaContainer/>
        </View>
      </Provider>
    );
  }
}

sagaMiddleware.run(rootSaga);
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
