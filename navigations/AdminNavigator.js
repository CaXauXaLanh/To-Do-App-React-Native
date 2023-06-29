import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeAdmin} from '../screen/HomeAdmin/HomeAdmin';
import {CreateUser} from '../screen/CreateUser/CreateUser';

const Stack = createStackNavigator();

export const AdminNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Admin" component={HomeAdmin} />
      <Stack.Screen name="CreateUser" component={CreateUser} />
    </Stack.Navigator>
  );
};
