import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ProductScreen from './src/screens/ProductScreen';
import AddToCartButon from './src/components/AddToCartButton';
import Product from './src/components/ProductComponent';
import CartItemComponent from './src/components/CartItemComponent';
import {
  dummyProductWithDiscount,
  dummyProductWithoutDiscount,
} from './src/utils/DummyData';
import CartScreen from './src/screens/CartScreen';
export class App extends React.Component {
  render() {
    return (
      <>
        <CartScreen />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 15,
  },
});

export default App;
