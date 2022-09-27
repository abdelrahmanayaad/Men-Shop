import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './styles';
import useInput from '../../../utils/useInput';

function ConfirmationCodeScreen(props) {
  const [code, setCode] = useInput('', [
    {key: 'isConfirmationCode', codeLength: 4},
  ]);

  const handleOnPress = () => {
    if (!code.isValid) {
      alert('you ender wrong code');
      return;
    }
    alert(code.value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Enter Your Phone Number</Text>
      <Input
        keyboardType="numeric"
        bordered
        textAlign="center"
        placeholder="__ __ __ __"
        style={{
          fontSize: 16,
          color: '#000',
        }}
        onChangeText={setCode}
        onSubmitEditing={handleOnPress}
      />
      <View style={styles.buttonView}>
        <Button title="DONE" onPress={handleOnPress} />
      </View>
    </View>
  );
}

export default ConfirmationCodeScreen;
