import React from 'react';
import {View, Text} from 'react-native';
import IonIcon from '../components/IonIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import CartScreen from '../screens/CartScreen';
import {TINTCOLOR} from '../constants/Constants';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';

const Tabs = createBottomTabNavigator();

function HomeTabs(props) {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const iconsName = {
          Home: 'home',
          Cart: 'cart',
          Search: 'search',
          Profile: 'person',
        };
        const iconsLabel = {
          Home: 'Home',
          Cart: 'Cart',
          Search: 'Search',
          Profile: 'Account',
        };
        return {
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={iconsName[route.name]}
              style={{color: focused ? TINTCOLOR : '#aaa'}}
              size={22}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text style={{color: focused ? TINTCOLOR : '#aaa'}}>
              {iconsLabel[route.name]}
            </Text>
          ),
        };
      }}>
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Cart"
        component={CartStack}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Search"
        component={SearchStack}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Profile"
        component={AccountStack}
        options={{headerShown: false}}
      />
    </Tabs.Navigator>
  );
}

export default HomeTabs;
