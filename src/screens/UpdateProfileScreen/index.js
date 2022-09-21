import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../components/Input';
import styles from './styles';
import Button from '../../components/Button';

function UpdateProfileScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Input stacked placeholder="Name" />
      </View>
      <View>
        <Input keyboardType="numeric" stacked placeholder="Phone" />
      </View>
      <View style={styles.button}>
        <Button title="SAVE" />
      </View>
    </View>
  );
}

export default UpdateProfileScreen;
