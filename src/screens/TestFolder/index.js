import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Input from '../../components/Input';
import {Validate} from '../../utils/TestValidate';
import styles from './styles';

function Test(props) {
  const [input, setInput] = useState({
    value: '',
    isValid: false,
    touched: false,
  });

  function updateInput(inputVal) {
    setInput({
      value: inputVal,
      isValid: Validate(inputVal, [{key: 'isPhone'}]),
      touched: true,
    });
  }

  function handleDone() {
    if (!input.isValid) {
      alert('Worng');
      return;
    }
    alert(input.value);
  }
  return (
    <View style={styles.container}>
      <Input
        showValidationFeedBack
        isValid={input.isValid}
        touched={input.touched}
        placeholder="Phone"
        bordered
        onChangeText={val => {
          updateInput(val);
        }}
      />
      {input.isValid
        ? null
        : input.touched && <Text style={styles.error}>error</Text>}

      <TouchableOpacity style={styles.button} onPress={handleDone}>
        <Text style={styles.title}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Test;
