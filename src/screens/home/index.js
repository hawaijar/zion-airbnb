import React from 'react';
import {ImageBackground, Text, View, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      {/*search bar*/}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('location search')}>
        <Fontisto name={'search'} size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpeg')}
        style={styles.image}>
        {/*title*/}
        <Text style={styles.title}>GO Near</Text>
        {/*button*/}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Button pressed!!!')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
