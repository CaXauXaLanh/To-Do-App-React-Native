import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerAdminNavigator, DrawerNavigator} from './DrawerNavigator';
import OnboardingNavigator from './OnboardingNavigator';
import {AuthContext} from '../context/AuthContext';
import {LoaderScreen} from '../screen/LoaderScreen';

export const AppNavigator = () => {
  const {isLoading, userToken, userInfo} = useContext(AuthContext);
  if (isLoading) {
    return <LoaderScreen />;
  }
  return (
    <NavigationContainer>
      {userToken ? (
        userInfo.role?.toLowerCase() === 'admin' ? (
          <DrawerAdminNavigator />
        ) : (
          <DrawerNavigator />
        )
      ) : (
        <OnboardingNavigator />
      )}
    </NavigationContainer>
  );
};
