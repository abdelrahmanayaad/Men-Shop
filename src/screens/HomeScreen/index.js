import React from 'react';
import {View, Text} from 'react-native';
import CategoryComponent from '../../components/CategoryComponent';
import Product from '../../components/ProductComponent';
import {
  category,
  dummyProductWithoutDiscount,
  dummyProductWithDiscount,
} from '../../utils/DummyData';
import styles from './styles';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <CategoryComponent category={category} />
      <Text style={styles.title}>Products</Text>
      <Product product={dummyProductWithDiscount} />
    </View>
  );
}

export default HomeScreen;
