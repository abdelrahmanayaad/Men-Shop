import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ProductScreen from './src/screens/ProductScreen';
import {
  dummyProductWithDiscount,
  dummyProductWithoutDiscount,
} from './src/utils/DummyData';
export class App extends React.Component {
  render() {
    return (
      <>
        <ProductScreen product={dummyProductWithDiscount} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
