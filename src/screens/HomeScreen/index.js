import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import CategoryComponent from '../../components/CategoryComponent';
import Product from '../../components/ProductComponent';
import ProductList from '../../components/ProductListComponent';
import {
  categories,
  dummyProductWithDiscount,
  dummyProducts,
} from '../../utils/DummyData';
import styles from './styles';

function renderCategory({item}) {
  return <CategoryComponent category={item} />;
}

function renderCategoryList(categories) {
  return (
    <FlatList
      data={categories}
      renderItem={renderCategory}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

function HomeScreen(props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {renderCategoryList(categories)}
      <Text style={styles.title}>Products</Text>
      <ProductList data={dummyProducts} />
    </ScrollView>
  );
}

export default HomeScreen;
