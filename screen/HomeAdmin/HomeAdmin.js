import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Appbar, Button, FAB, Modal, Portal} from 'react-native-paper';
import {Tab} from '@rneui/themed';
import {TabViewAdmin} from '../../components/TabViewAdmin/TabViewAdmin';
import {Picker} from '@react-native-picker/picker';
import {ModalUpdateRole} from '../../hooks/Modal/ModalUpdateRole';

export const HomeAdmin = ({navigation}) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Action icon={'menu'} onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="User management" />
      </Appbar.Header>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        variant="primary"
        containerStyle={{backgroundColor: '#ccc'}}
        titleStyle={{color: '#000'}}>
        <Tab.Item title={'PM'} />
        <Tab.Item title={'Tester'} />
      </Tab>
      <TabViewAdmin index={index} setIndex={setIndex} />

      <FAB
        mode="flat"
        size="medium"
        icon="plus"
        onPress={() => {
          navigation.navigate('CreateUser');
        }}
        style={[styles.fab]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    borderRadius: 50,
  },
  container: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 50,
    borderRadius: 6,
  },
  headerModal: {
    fontSize: 20,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
    lineHeight: 50,
  },
});
