import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import AddressScreen from '../screens/AddressScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import OrdersScreen from '../screens/OrderScreen';

const Stack = createStackNavigator();

function AccountStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="AccountScreen"
        component={AccountScreen}
      />
      <Stack.Screen name="AddressScreen" component={AddressScreen} />
      <Stack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
      />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
