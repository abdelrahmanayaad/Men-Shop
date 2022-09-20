import React from 'react';
import {View, Text} from 'react-native';
import {CURRENCY} from '../../constants/Constants';
import {getActualPrice} from '../../utils/HelperFunction';
import styles from './styles';

function Price(props) {
  const {price, discount} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.newPrice}>
        {getActualPrice(price, discount) + CURRENCY}
      </Text>
      {discount && <Text style={styles.oldPrice}>{price + CURRENCY}</Text>}
    </View>
  );
}

export default Price;
