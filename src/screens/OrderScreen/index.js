import React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import OrderComponent from '../../components/OrderComponent';
import {dummyProducts, dummyProductWithDiscount} from '../../utils/DummyData';

function renderOrders({item}) {
  return <OrderComponent orderItem={item} />;
}

function renderOrdersList(order) {
  return (
    <FlatList
      data={order}
      renderItem={renderOrders}
      showsVerticalScrollIndicator={false}
    />
  );
}

function OrdersScreen(props) {
  return (
    <View style={styles.container}>{renderOrdersList(dummyProducts)}</View>
  );
}

export default OrdersScreen;
