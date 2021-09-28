import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Entypo from 'react-native-vector-icons/Entypo';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyles}>Hello Hawaijar!</Text>
        <Entypo name={'home'} size={24} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'rebeccapurple',
  },
});

export default App;
