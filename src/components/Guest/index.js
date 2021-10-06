import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style';

const Guest = ({mainTitle, secondaryTitle, count, setCount}) => {
  const handleIncrement = () => {
    setCount(count => count + 1);
  };
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count => count - 1);
    }
  };
  return (
    <View style={styles.row}>
      {/*Titles*/}
      <View>
        <Text style={styles.mainTitle}>{mainTitle}</Text>
        <Text style={styles.secondaryTitle}>{secondaryTitle}</Text>
      </View>
      {/*Buttons*/}
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleDecrement} style={styles.button}>
          <Text style={styles.operator}>-</Text>
        </Pressable>
        <Text style={styles.textCount}>{count}</Text>
        <Pressable onPress={handleIncrement} style={styles.button}>
          <Text style={styles.operator}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Guest;
