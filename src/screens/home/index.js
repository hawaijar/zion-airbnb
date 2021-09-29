import React from 'react';
import {ImageBackground, Text, View, Pressable} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View>
      {/*search bar*/}
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpeg')}
        style={styles.image}>
        {/*title*/}
        <Text style={styles.title}>GO Near</Text>
        {/*button*/}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Button pressed!!!')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
