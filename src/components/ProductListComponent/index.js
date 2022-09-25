import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Product from '../ProductComponent';

function renderProduct({item}) {
  return <Product product={item} />;
}

function ProductList(porps) {
  return <FlatList {...porps} renderItem={renderProduct} numColumns={2} />;
}

export default ProductList;
