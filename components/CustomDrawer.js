import React from 'react';
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

export const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#0C66E4'}}>
        <ImageBackground
          source={{uri: 'https://www.colorhexa.com/0c66e4.png'}}
          style={{padding: 20}}>
          <Image
            source={{
              uri: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
            }}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
          <Text style={{color: '#ffffff', fontWeight: 'bold', paddingTop: 10}}>
            {'Hoàng Thanh Tùng'}
          </Text>
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#ffffff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{borderTopWidth: 0.5}}
        onPress={() => console.log('haha')}>
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
