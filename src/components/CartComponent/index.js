import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function Cart(props) {
  const {style, ...rest} = props;
  return (
    <View style={[styles.cartContainer, style]}>
      <View {...rest} style={styles.cart} />
    </View>
  );
}

export default Cart;
