import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import OrdersScreen from './src/screens/OrderScreen';
import {dummyProductWithDiscount} from './src/utils/DummyData';
export class App extends React.Component {
  render() {
    return (
      <>
        <OrdersScreen />
      </>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
