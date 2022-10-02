import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

function Button(props) {
  const {
    title,
    backgroundColor,
    color,
    fontSize,
    buttonStyle,
    titleStyle,
    Loading,
    disabled,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          backgroundColor: backgroundColor || '#000',
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        },
        buttonStyle,
        disabled ? {backgroundColor: '#aaa'} : null,
      ]}>
      <Text
        style={[
          {
            color: color || '#fff',
            fontWeight: 'bold',
            fontSize: fontSize || 20,
          },
          titleStyle,
        ]}>
        {Loading ? <ActivityIndicator size={30} color="#fff" /> : title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
