import React from 'react';
import {SafeAreaView} from 'react-native';
import GuestScreen from './src/screens/Guest';
// import LocationSearch from './src/screens/LocationSearch';
const App = () => {
  return (
    <SafeAreaView>
      {/*<LocationSearch />*/}
      <GuestScreen />
    </SafeAreaView>
  );
};

export default App;
