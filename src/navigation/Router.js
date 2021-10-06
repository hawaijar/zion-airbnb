import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LocationSearch from '../screens/LocationSearch';
import GuestScreen from '../screens/Guest';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={'home'}
          component={HomeTabNavigator}
        />
        <Stack.Screen
          options={{
            title: 'Search your destination',
          }}
          name={'location search'}
          component={LocationSearch}
        />
        <Stack.Screen
          options={{
            title: 'How many people?',
          }}
          name={'guest page'}
          component={GuestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
