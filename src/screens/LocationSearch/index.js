import React, {useState} from 'react';
import {View, TextInput, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import searchResults from '../../../assets/data/search';
import LocationResult from '../../components/LocationResult';

const LocationSearch = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState('');
  return (
    <Pressable onPress={() => navigation.navigate('guest page')}>
      <View style={styles.container}>
        {/*Input component*/}
        <TextInput
          style={styles.textInput}
          placeholder={'where are you going?'}
          value={inputText}
          onChangeText={setInputText}
        />
        {/*List of matched locations*/}
        <FlatList
          data={searchResults}
          renderItem={({item}) => <LocationResult {...item} />}
        />
      </View>
    </Pressable>
  );
};

export default LocationSearch;
