import React from 'react';
import {Step1} from '../screen/Onboarding/Step1';
import {LogIn} from '../screen/Onboarding/LogIn';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screen/Onboarding/SignUp';

const Stack = createStackNavigator();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Step1" component={Step1} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
