import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';

function AppContainer(props) {
  const {isAuth} = props;
  return (
    <NavigationContainer>
      {isAuth ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppContainer;
