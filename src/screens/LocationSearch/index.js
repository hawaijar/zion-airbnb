import React, {useState} from 'react';

import {Text, View, TextInput, FlatList} from 'react-native';
import styles from './style';
import searchResults from '../../../assets/data/search';
import LocationResult from '../../components/LocationResult';

const LocationSearch = () => {
  const [inputText, setInputText] = useState('');
  return (
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
  );
};

export default LocationSearch;
