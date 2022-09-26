import React from 'react';
import {View, Text} from 'react-native';
import Product from '../../components/ProductComponent';
import {dummyProductWithDiscount} from '../../utils/DummyData';
import styles from './styles';

function CategoryScreen(props) {
  // const {product} = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <Product product={dummyProductWithDiscount} />
    </View>
  );
}

export default CategoryScreen;
