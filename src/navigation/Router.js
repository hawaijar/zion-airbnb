import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LocationSearch from '../screens/LocationSearch';
import GuestScreen from '../screens/Guest';
import HomeTabNavigator from './HomeTabNavigator';
import SearchResult from '../screens/SearchResult';

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
        <Stack.Screen
          options={{
            title: 'Search your destination?',
          }}
          name={'result page'}
          component={SearchResult}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
