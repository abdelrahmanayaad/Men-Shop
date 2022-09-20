import React from 'react';
import {View, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function IonIcon(props) {
  const {name, ...rest} = props;
  return (
    <Icon
      {...rest}
      name={Platform.select({android: 'md-', ios: 'ios-'}) + name}
    />
  );
}

export default IonIcon;
