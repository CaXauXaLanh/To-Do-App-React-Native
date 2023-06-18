import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './DrawerNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import {AuthContext} from '../context/AuthContext';
import {ActivityIndicator} from 'react-native-paper';

export const AppNavigator = () => {
  const {isLoading, userToken} = useContext(AuthContext);
  if (isLoading) {
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <NavigationContainer>
      {userToken ? <DrawerNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  );
};
