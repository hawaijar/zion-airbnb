import React from 'react';
import {SafeAreaView} from 'react-native';

// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import HomeScreen from './src/screens/home';
import Post from './src/components/Post';
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView>
      {/*<HomeScreen />*/}
      <Post />
    </SafeAreaView>
  );
};

export default App;
