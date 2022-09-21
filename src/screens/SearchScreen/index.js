import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/Input';
import styles from './styles';

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <Input
        paddingHorizontal={10}
        right
        placeholder="Search"
        iconName="search1"
        bordered
      />
    </View>
  );
}

export default SearchScreen;
