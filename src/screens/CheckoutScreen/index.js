import React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button';
import {CURRENCY} from '../../constants/Constants';
import styles from './styles';

function CheckoutScreen(props) {
  const renderAddressData = () => {
    return (
      <View style={styles.dataView}>
        <View>
          <Text style={styles.shipToText}>Ship To</Text>
        </View>
        <View style={styles.addressView}>
          <Text style={styles.dataAddressText}>Cairo, Egypt</Text>
          <Text style={styles.dataAddressText}>House no : 1907</Text>
          <Text style={styles.dataAddressText}>Road no : 74</Text>
        </View>
        <View style={styles.updateView}>
          <Text onPress={() => alert('update')} style={styles.updateTitle}>
            Update
          </Text>
        </View>
      </View>
    );
  };

  const renderShoopingCostInfo = () => {
    return (
      <View style={styles.productInfoView}>
        {product('SubTotal', '160.0 ' + CURRENCY)}
        {product('Shipping', 'Free')}
        <View style={styles.line} />
        {product('SubTotal', '160.0 ' + CURRENCY)}
      </View>
    );
  };

  const button = () => {
    return <Button title="BUY" />;
  };
  const product = (title, money) => {
    return (
      <View style={styles.productComponentView}>
        <Text style={styles.shoppingProduct}>{title}</Text>
        <Text style={styles.shoppingProduct}>{money}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderAddressData()}
      {renderShoopingCostInfo()}
      {button()}
    </View>
  );
}

export default CheckoutScreen;
