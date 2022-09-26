import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Cart from '../CartComponent';
import Price from '../PriceComponent';
import styles from './styles';

function Product(props) {
  const {product} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductScreen', {
          productId: 1,
        });
      }}
      style={styles.container}>
      <Cart style={styles.cart}>
        <Image style={styles.productImageStyle} source={{uri: product.image}} />
      </Cart>
      <Price price={product.price} discount={product.discount} />
      <Text style={styles.productNameStyle}>{product.name}</Text>
    </TouchableOpacity>
  );
}

export default Product;
