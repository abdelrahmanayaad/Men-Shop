import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CartItemComponent from '../../components/CartItemComponent';
import {dummyProducts} from '../../utils/DummyData';
import Button from '../../components/Button';
import styles from './styles';
import {CURRENCY} from '../../constants/Constants';

function renderItem({item}) {
  return <CartItemComponent cartItem={item} />;
}

function renderCartItems(product) {
  return (
    <FlatList
      data={product}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

function CartScreen(props) {
  return (
    <View style={styles.container}>
      {renderCartItems(dummyProducts)}
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
