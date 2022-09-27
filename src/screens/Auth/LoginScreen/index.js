import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './styles';
import useInput from '../../../utils/useInput';

function LoginScreen(props) {
  const {navigation} = props;
  const [inputPhone, setInputPhone] = useInput('', [{key: 'isPhone'}]);

  const handlerDoneButton = () => {
    if (!inputPhone.isValid) {
      if (inputPhone.value.length === 0) {
        alert('you must enter phone');
        return;
      }
      alert('You entered wrong phone');
      return;
    }
    navigation.navigate('ConfirmationCodeScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Enter Your Phone Number</Text>
      <Input
        keyboardType="numeric"
        left
        iconName="phone"
        underlined
        placeholder="Phone"
        style={{padding: 10, fontSize: 16, color: '#000'}}
        onChangeText={setInputPhone}
        onSubmitEditing={handlerDoneButton}
        returnKeyType="done"
      />
      <View style={styles.buttonView}>
        <Button onPress={handlerDoneButton} title="DONE" />
      </View>
    </View>
  );
}

export default LoginScreen;
