import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import OrdersScreen from './src/screens/OrderScreen';
import AppContainer from './src/navigation';
export class App extends React.Component {
  render() {
    return (
      <>
        <AppContainer isAuth={true} />
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
