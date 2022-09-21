import React from 'react';
import {View, Text, Image} from 'react-native';
import Cart from '../CartComponent';
import styles from './styles';
import Price from '../PriceComponent';

function OrderComponent(props) {
  const {orderItem} = props;
  return (
    <View>
      <Cart>
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: orderItem.image}} />
          <View style={styles.rightWrapper}>
            <Text style={styles.name}>{orderItem.name}</Text>
            <Price price={orderItem.price} discount={orderItem.discount} />
            <View style={styles.placedTitleWrapper}>
              <Text style={styles.placedTitle}>PLACED</Text>
            </View>
          </View>
        </View>
      </Cart>
    </View>
  );
}

export default OrderComponent;
