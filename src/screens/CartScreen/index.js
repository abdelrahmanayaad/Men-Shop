import React from 'react';
import {View, Text} from 'react-native';
import CartItemComponent from '../../components/CartItemComponent';
import {dummyProductWithDiscount} from '../../utils/DummyData';
import Button from '../../components/Button';
import styles from './styles';
import {CURRENCY} from '../../constants/Constants';

function CartScreen(props) {
  return (
    <View style={styles.container}>
      <CartItemComponent cartItem={dummyProductWithDiscount} />
      <View style={styles.buttonWrapper}>
        <View style={styles.buttonInnerWrapper}>
          <Text style={styles.totalMoney}>Total = 1000 {CURRENCY}</Text>
          <Button buttonStyle={styles.button} title="CHECKED" />
        </View>
      </View>
    </View>
  );
}

export default CartScreen;
