import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function Button(props) {
  const {title, backgroundColor, color, fontSize, buttonStyle, titleStyle} =
    props;
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: backgroundColor || '#000',
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        },
        buttonStyle,
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
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
