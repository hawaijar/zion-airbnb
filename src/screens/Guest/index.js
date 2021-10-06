import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import Guest from '../../components/Guest';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View>
      {/*Row1: adults*/}
      <Guest
        mainTitle={'Adults'}
        secondaryTitle={'Ages 13 or above'}
        count={adults}
        setCount={setAdults}
      />

      {/*Row2: Children*/}
      <Guest
        mainTitle={'Children'}
        secondaryTitle={'Ages 2-12'}
        count={children}
        setCount={setChildren}
      />

      {/*Row3: Infants*/}
      <Guest
        mainTitle={'Infants'}
        secondaryTitle={'Under 2'}
        count={infants}
        setCount={setInfants}
      />
    </View>
  );
};

export default GuestScreen;
