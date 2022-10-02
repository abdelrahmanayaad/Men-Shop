import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppContainer from './src/navigation';
import Test from './src/screens/TestFolder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY} from './src/constants/Constants';
import axios from 'axios';
export function App(props) {
  const [token, setToken] = useState('');
  useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then(val => {
      setToken(val);
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
