import React from 'react';
import {Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';

const LocationResult = ({description, id}) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        <Entypo name={'location-pin'} size={30} />
      </View>
      <Text style={styles.locationText} key={id}>
        {description}
      </Text>
    </View>
  );
};

export default LocationResult;
