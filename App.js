import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LoginScreen from './src/screens/Auth/LoginScreen';
export class App extends React.Component {
  render() {
    return (
      <>
        <LoginScreen />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
