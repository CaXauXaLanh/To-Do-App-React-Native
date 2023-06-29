import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Step1} from '../screen/Onboarding/Step1';
import {LogIn} from '../screen/Onboarding/LogIn';
import {VerifyOTP} from '../screen/Onboarding/VerifyOTP';

const Stack = createStackNavigator();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
    </Stack.Navigator>
  );
}
