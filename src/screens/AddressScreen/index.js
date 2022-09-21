import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/Input';
import styles from './styles';
import Button from '../../components/Button';

function AddressScreen(props) {
  function InputComponent(placeholder, keyboardType) {
    return (
      <View style={styles.input}>
        <Input stacked placeholder={placeholder} keyboardType={keyboardType} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {InputComponent('Name')}
      {InputComponent('Phone', 'numeric')}
      {InputComponent('City')}
      {InputComponent('Area')}
      {InputComponent('Street')}
      {InputComponent('Building')}
      <View style={styles.button}>
        <Button title="ADD" />
      </View>
    </View>
  );
}

export default AddressScreen;
