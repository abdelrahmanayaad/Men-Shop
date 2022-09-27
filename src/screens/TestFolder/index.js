import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Input from '../../components/Input';
import styles from './styles';
import {Validate} from '../../utils/Validate';

function Test(props) {
  const [input, setInputVal] = useState({
    value: '',
    isValid: true,
    touched: false,
  });

  const updateInputValue = inputVal => {
    setInputVal({
      value: inputVal,
      //isValid: validatePhone(inputVal),
      isValid: Validate(inputVal, [{key: 'isMinChars', minChars: 5}]),
      touched: true,
    });
  };

  // function validatePhone(phoneVal) {
  //   if (phoneVal.length !== 11) return false;
  //   return /^[0-9]+$/.test(phoneVal);
  //   /* formula to convert string to array and loop on each char or idx and for each char return bool
  //   if any char return false function return false*/
  // }
  handleAlert = () => {
    if (!input.isValid) {
      alert('You entered Something wrong');
      return;
    }
    alert(input.value);
  };
  return (
    <View style={styles.container}>
      <Input
        isValid={input.isValid}
        showValidationFeedBack
        placeholder="Phone"
        bordered
        touched={input.touched}
        onChangeText={updateInputValue}
        /*
        onChangeText={val => {
            setInputVal(val);
          }}
        */
      />
      {!input.isValid ? (
        <Text style={styles.error}>Phone is not valid !</Text>
      ) : (
        <Text style={styles.error}></Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleAlert}>
        <Text style={styles.title}>Button</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Test;
