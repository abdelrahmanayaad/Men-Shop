import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Cart from '../CartComponent';
import styles from './styles';

function CategoryComponent(props) {
  const navigation = useNavigation();
  const {category} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CategoryScreen');
      }}
      style={styles.container}>
      <Cart style={styles.cart}>
        <Image
          style={styles.categoryImageStyle}
          source={{uri: category.image}}
        />
      </Cart>
      <Text style={styles.categoryNameStyle}>{category.name}</Text>
    </TouchableOpacity>
  );
}

export default CategoryComponent;
