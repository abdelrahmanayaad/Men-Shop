import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CartScreen from '../screens/CartScreen';
import ProductScreen from '../screens/ProductScreen';

const Stack = createStackNavigator();

function CartStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="CartScreen"
        component={CartScreen}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default CartStack;
