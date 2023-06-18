import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigator} from './StackNavigator';
import UserDetail from '../screen/UserDetail';
import Login from '../screen/Author/login';
import Signup from '../screen/Author/signup';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {CustomDrawer} from '../components/CustomDrawer';
import {faHouse, faUser} from '@fortawesome/free-solid-svg-icons';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false, drawerLabelStyle: {marginLeft: -22}}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={'DashboardDrawer'}
        component={MainStackNavigator}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon icon={faHouse} color={color} size={22} />
          ),
        }}
      />
      <Drawer.Screen
        name={'UserDetail'}
        component={UserDetail}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon icon={faUser} color={color} size={22} />
          ),
        }}
      />
       <Drawer.Screen
        name={'Login'}
        component={Login}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon icon={faUser} color={color} size={22} />
          ),
        }}
      />
       <Drawer.Screen
        name={'Signup'}
        component={Signup}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon icon={faUser} color={color} size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
