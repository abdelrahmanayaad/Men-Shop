import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './styles';
import useInput from '../../../utils/useInput';
import axios from 'axios';

function LoginScreen(props) {
  const {navigation} = props;
  const [inputPhone, setInputPhone] = useInput('', [{key: 'isPhone'}]);
  const [isLoading, setIsLoading] = useState(false);

  // const handlerDoneButton = () => {
  //   if (inputPhone.isValid) {
  //     if (inputPhone.value.length === 0) {
  //       alert('you must enter phone');
  //       return;
  //     }
  //     alert('You entered wrong phone');
  //     navigation.navigate('ConfirmationCodeScreen');
  //     return;
  //   }
  // };
  const handlerDoneButton = () => {
    if (inputPhone.isValid) {
      setIsLoading(true);
      axios
        .post('/verify', {phone: inputPhone.value})
        .then(res => {
          console.log(res.data);
          navigation.navigate('ConfirmationCodeScreen', {
            phone: inputPhone.value,
          });
        })
        .catch(err => {
          console.log('error', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    return;
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
        <Button
          onPress={handlerDoneButton}
          title="DONE"
          Loading={isLoading}
          disabled={!inputPhone.isValid}
        />
      </View>
    </View>
  );
}

export default LoginScreen;
