import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppContainer from './src/navigation';
import Test from './src/screens/TestFolder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY} from './src/constants/Constants';
import Dispatcher from './src/Flux/Dispatcher';
import authStore from './src/Flux/AuthStore';
import axios from 'axios';
export function App(props) {
  const [token, setToken] = useState(authStore.token);

  const handleSetToken = () => {
    setToken(authStore.token);
  };
  useEffect(() => {
    authStore.on('change', handleSetToken);
  }, []);

  useEffect(() => {
    // AsyncStorage.clear();
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
      Dispatcher.dispatch({type: 'SET_TOKEN', payload: {token: val}});
      axios.defaults.headers.Authorization = 'Bearer ' + val;
    });
  }, []);
  return token == '' ? null : <AppContainer isAuth={!!token} />;
  /**
   * or @retrun token !== "" && <AppContainer isAuth={!!token} />;
   */
}

const styles = StyleSheet.create({});

export default App;
