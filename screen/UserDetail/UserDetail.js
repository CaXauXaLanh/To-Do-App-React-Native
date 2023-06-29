import React, {useContext, useState} from 'react';

import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Tab} from '@rneui/themed';
import TabViewContain from '../../components/TabView';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../../context/AuthContext';

export const UserDetail = ({navigation}) => {
  const {userInfo} = useContext(AuthContext);
  const [index, setIndex] = useState(0);
  const handleChangeTabIndex = index => {
    setIndex(index);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg',
          }}
          style={{
            height: 65,
            width: 65,
            borderRadius: 40,
            borderWidth: 1,
          }}
        />
        <View style={styles.displayName}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {`@${userInfo.username}`}
          </Text>
          <Text>{userInfo.role}</Text>
        </View>
        <View style={styles.iconBack}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesomeIcon icon={faXmark} size={30} color={'#737373'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <Tab
          value={index}
          onChange={handleChangeTabIndex}
          indicatorStyle={{
            height: 3,
            backgroundColor: '#0C66E4',
          }}
          containerStyle={{borderBottomWidth: 3, borderColor: '#ccc'}}
          scrollable>
          <Tab.Item
            title={'Profile and visibility'}
            titleStyle={{fontSize: 14, color: '#4d4d4d'}}
          />
          <Tab.Item
            title={'Settings'}
            titleStyle={{fontSize: 14, color: '#4d4d4d'}}
          />
        </Tab>
      </View>
      <TabViewContain index={index} setIndex={setIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconBack: {
    zIndex: 99,
    position: 'absolute',
    margin: 15,
    top: 0,
    right: 0,
  },
  header: {
    borderWidth: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    height: 150,
    paddingLeft: 20,
    flexDirection: 'row',
    // borderBottomWidth: 1,
  },
  displayName: {
    padding: 15,
  },
  tabContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  tabViewContainer: {
    // display: 'flex',
    padding: 15,
    flex: 1,
  },
});
