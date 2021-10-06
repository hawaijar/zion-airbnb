import React from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import GuestScreen from './src/screens/Guest';
import HomeScreen from './src/screens/home';
// import LocationSearch from './src/screens/LocationSearch';
import Router from './src/navigation/Router';
const App = () => {
  return <Router />;
};

export default App;
