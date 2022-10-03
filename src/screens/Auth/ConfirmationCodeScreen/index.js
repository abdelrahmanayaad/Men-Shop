import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import styles from './styles';
import useInput from '../../../utils/useInput';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY} from '../../../constants/Constants';
import Dispatcher from '../../../Flux/Dispatcher';

function ConfirmationCodeScreen(props) {
  const {navigation} = props;
  const [code, setCode] = useInput('', [
    {key: 'isConfirmationCode', codeLength: 4},
  ]);
  const {phone} = props.route.params;
  const [isLoading, setIsLoading] = useState(false);

  const handleOnPress = () => {
    if (code.isValid) {
      setIsLoading(true);
      axios
        .post('/verify/validate', {phone, code: code.value})
        .then(res => {
          console.log(res.data);
          const {token, userData} = res.data;
          axios.defaults.headers.Authorization = 'Bearer' + token;
          Dispatcher.dispatch({type: 'SET_TOKEN', payload: {token: token}});
          Dispatcher.dispatch({type: 'SET_USER', payload: {user: userData}});
          AsyncStorage.setItem(TOKEN_KEY, token);
          //   .then(() => {
          //   AsyncStorage.getItem(TOKEN_KEY).then(value => {
          //     console.log(value);
          //   });
          // });
        })
        .catch(err => {
          console.log('error', err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
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
        <Button
          title="DONE"
          onPress={handleOnPress}
          disabled={!code.isValid}
          Loading={isLoading}
        />
      </View>
    </View>
  );
}

export default ConfirmationCodeScreen;
