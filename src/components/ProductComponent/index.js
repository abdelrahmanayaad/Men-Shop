import React from 'react';
import {View, Text, Image} from 'react-native';
import Cart from '../CartComponent';
import Price from '../PriceComponent';
import styles from './styles';

function Product(props) {
  const {product} = props;
  return (
    <View>
      <Cart>
        <Image style={styles.productImageStyle} source={{uri: product.image}} />
      </Cart>
      <Price price={product.price} discount={product.discount} />
      <Text style={styles.productNameStyle}>{product.name}</Text>
    </View>
  );
}

export default Product;
