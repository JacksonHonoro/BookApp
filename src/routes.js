import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Books from './pages/Books';
import SingleBook from './pages/SingleBook';

export default function Routes() {
  const config = {
    title: 'Pixter Books',
    justifyContent: 'center',
    headerStyle: {
      backgroundColor: '#FFDE3B',
    },
    headerTintColor: 'rgba(0, 0, 0, 0.7)',
    headerTitleStyle: {
      justifyContent: 'center',
    },
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: true}}>
        <AppStack.Screen name="Books" component={Books} options={config} />
        <AppStack.Screen
          name="SingleBook"
          component={SingleBook}
          options={config}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
