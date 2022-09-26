import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AddToCartButon from '../AddToCartButton';
import Cart from '../CartComponent';
import Price from '../PriceComponent';
import styles from './styles';

function CartItemComponent(props) {
  const {cartItem} = props;
  const navigation = useNavigation();
  return (
    <Cart style={styles.cart}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductScreen');
          }}>
          <Image source={{uri: cartItem.image}} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.rightWrapper}>
          <Text style={styles.productName}>{cartItem.name}</Text>
          <Price price={cartItem.price} discount={cartItem.discount} />
          <AddToCartButon padding={{padding: 14}} textStyle={{fontSize: 14}} />
        </View>
      </View>
    </Cart>
  );
}

export default CartItemComponent;
