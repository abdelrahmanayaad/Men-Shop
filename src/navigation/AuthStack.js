import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import ConfirmationCodeScreen from '../screens/Auth/ConfirmationCodeScreen';

const Stack = createStackNavigator();

function AuthStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        name="ConfirmationCodeScreen"
        component={ConfirmationCodeScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
