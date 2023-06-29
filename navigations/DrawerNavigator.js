import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MainStackNavigator} from './StackNavigator';
import UserDetail from '../screen/UserDetail';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {CustomDrawer} from '../components/CustomDrawer';
import {faHouse, faUser} from '@fortawesome/free-solid-svg-icons';
import {CustomDrawerAdmin} from '../components/CustomDrawerAdmin';
import {AdminNavigator} from './AdminNavigator';

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
    </Drawer.Navigator>
  );
};

export const DrawerAdminNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerAdmin {...props} />}>
      <Drawer.Screen name="Management" component={AdminNavigator} />
    </Drawer.Navigator>
  );
};
