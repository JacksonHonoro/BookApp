/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Routes from './routes';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="default" />
      <Routes />
    </Provider>
  );
};

export default App;
