import React from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './styles';

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Enter Your Phone Number</Text>
      <Input
        keyboardType="numeric"
        left
        underlined
        placeholder="Phone"
        style={{padding: 10, fontSize: 16, color: '#000'}}
      />
      <View style={styles.buttonView}>
        <Button title="DONE" />
      </View>
    </View>
  );
}

export default LoginScreen;
