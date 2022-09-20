import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Price from '../../components/PriceComponent';
import Button from '../../components/Button';
import styles from './styles';
import IonIcon from '../../components/IonIcons';
import {dummyProductWithDiscount} from '../../utils/DummyData';

function getProduct(productId) {
  return dummyProductWithDiscount;
}

function ProductScreen(props) {
  const {productId} = props;
  const product = getProduct(productId);
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.imageStyle} />
      <View style={styles.headerStyle}>
        <IonIcon name="arrow-back" style={styles.iconStyle} />
        <Text style={styles.titleStyle}>Product Name</Text>
      </View>
      <View style={styles.underProductImageStyle}>
        <Price price={product.price} discount={product.discount} />
        <Text style={styles.descriptionTitleStyle}>Description</Text>
        <Text style={styles.descriptionText}>
          A very nice product , bla ba bla ...
        </Text>
        <View style={styles.buttonViewStyle}>
          <Button title="Add To Cart" />
        </View>
      </View>
    </View>
  );
}

export default ProductScreen;
