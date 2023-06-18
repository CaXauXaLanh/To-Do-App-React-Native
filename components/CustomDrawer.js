import React, {useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignOut} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../context/AuthContext';

export const CustomDrawer = props => {
  const {logout, userInfo} = useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#0C66E4'}}>
        <ImageBackground
          source={{uri: 'https://www.colorhexa.com/0c66e4.png'}}
          style={{padding: 20}}>
          <Text
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
              paddingTop: 10,
              fontSize: 20,
            }}>
            {`@${userInfo.username}`}
          </Text>
          <Text style={{padding: 10, fontSize: 16, color: '#FFF'}}>
            {userInfo.role}
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{borderTopWidth: 0.5}}
        onPress={() => {
          logout();
        }}>
        <View
          style={{
            bottom: 0,
            padding: 20,
            flexDirection: 'row',
          }}>
          <FontAwesomeIcon icon={faSignOut} size={20} />

          <Text style={{paddingLeft: 15, fontWeight: 'bold'}}>Sign out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
