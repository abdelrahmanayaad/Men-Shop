import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AppContainer from './src/navigation';
import Test from './src/screens/TestFolder';
export class App extends React.Component {
  render() {
    return (
      <>
        <AppContainer isAuth={false} />
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
