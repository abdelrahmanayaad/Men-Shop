import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IonIcon from '../IonIcons';

function Input(props) {
  const {
    placeholder,
    style,
    height,
    bordered,
    borderWidth,
    borderColor,
    borderRadius,
    paddingHorizontal,
    textAlign,
    underlined,
    underlinedStyle,
    borderBottomWidth,
    borderBottomColor,
    stacked,
    left,
    right,
    iconName,
    iconStyle,
    keyboardType,
    showValidationFeedBack,
    isValid,
    touched,
    ...rest
  } = props;
  return (
    <>
      {stacked && <Text>{placeholder}</Text>}
      <View
        style={[
          bordered && {
            height: height || 50,
            borderWidth: borderWidth || 1,
            borderColor: borderColor || '#aaa',
            borderRadius: borderRadius || 5,
            paddingHorizontal: paddingHorizontal || 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: isValid ? 0 : 0,
          },
          (stacked || underlined) && {
            borderBottomWidth: borderBottomWidth || 1,
            borderBottomColor: borderBottomColor || '#aaa',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          },
          underlinedStyle,
        ]}>
        {left && (
          <Icon name={iconName} size={24} style={iconStyle} color={'#000'} />
        )}
        <TextInput
          {...rest}
          keyboardType={keyboardType || 'default'}
          placeholder={stacked ? '' : placeholder}
          style={[{flex: 1, textAlign: textAlign || 'left', padding: 0}, style]}
        />
        {right && (
          <Icon name={iconName} size={24} style={iconStyle} color={'#000'} />
        )}
        {showValidationFeedBack && touched && (
          <IonIcon
            style={{fontSize: 26, color: isValid ? 'green' : 'red'}}
            name={isValid ? 'checkmark' : 'close'}
          />
        )}
      </View>
    </>
  );
}

export default Input;
