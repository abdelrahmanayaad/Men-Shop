import React from 'react';
import {View, Text, Image} from 'react-native';
import Cart from '../CartComponent';
import styles from './styles';

function CategoryComponent(props) {
  const {category} = props;
  return (
    <View>
      <Cart>
        <Image
          style={styles.categoryImageStyle}
          source={{uri: category.image}}
        />
      </Cart>
      <Text style={styles.categoryNameStyle}>{category.name}</Text>
    </View>
  );
}

export default CategoryComponent;
