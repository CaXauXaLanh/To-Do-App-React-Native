import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Workspace from '../screen/Workspace';
import Dashboard from '../screen/Dashboard';
import DetailTask from '../screen/DetailTask';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#1a75ff',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export const MainStackNavigator = ({navigation}) => {
  const menuIcon = (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <FontAwesome5
        name={'bars'}
        style={{padding: 20, height: '100%'}}
        size={20}
        color={'#fff'}
      />
    </TouchableOpacity>
  );

  const header = (
    <View
      style={{
        height: 60,
        backgroundColor: '#0C66E4',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {menuIcon}
      <Text
        style={{
          color: '#fff',
          fontSize: 21,
          fontWeight: 500,
          marginLeft: 10,
        }}>
        Workspace
      </Text>
    </View>
  );

  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Workspace',
          header: () => header,
        }}
      />
      <Stack.Screen name="Workspace" component={Workspace} />
      <Stack.Screen
        name={'Detail'}
        component={DetailTask}
        options={{
          headerShown: false,
          gestureDirection: 'vertical',
          gestureEnabled: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{padding: 15}}>
              <FontAwesomeIcon icon={faXmark} color={'#fff'} size={25} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
