import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import OrderComponent from '../../components/OrderComponent';
import {dummyProductWithDiscount} from '../../utils/DummyData';

function OrdersScreen(props) {
  return (
    <View style={styles.container}>
      <OrderComponent orderItem={dummyProductWithDiscount} />
    </View>
  );
}

export default OrdersScreen;
