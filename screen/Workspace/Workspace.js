import React, {useState} from 'react';

import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Column} from './Column';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export const Workspace = ({navigation, picture}) => {
  const mockData = [
    {
      id: '1',
      name: 'TO DO',
      rows: [
        {
          id: '11',
          name: 'Task 1',
        },
        {
          id: '12',
          name: 'Task 2',
        },
        {
          id: '13',
          name: 'Task 3',
        },
        {
          id: '14',
          name: 'Task 4',
        },
        {
          id: '15',
          name: 'Task 5',
        },
        {
          id: '16',
          name: 'Task 6',
        },
        {
          id: '17',
          name: 'Task 7',
        },
        {
          id: '18',
          name: 'Task 8',
        },
        {
          id: '19',
          name: 'Task 9',
        },
        {
          id: '111',
          name: 'Task 10',
        },
        {
          id: '112',
          name: 'Task 11',
        },
      ],
    },
    {
      id: '2',
      name: 'DOING',
      rows: [
        {
          id: '21',
          name: 'Task 12',
        },
        {
          id: '22',
          name: 'Task 13',
        },
        {
          id: '23',
          name: 'Task 14',
        },
      ],
    },
    {
      id: '3',
      name: 'DONE',
      rows: [
        {
          id: '31',
          name: 'Task 15',
        },
        {
          id: '32',
          name: 'Task 16',
        },
      ],
    },
  ];

  return (
    <ImageBackground
      source={require('../../asset/background1.jpg')}
      style={styles.workspaceContainer}>
      <View style={{flex: 0.95, paddingTop: 10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {mockData.map(data => (
            <Column data={data} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('haha');
        }}
        style={styles.roundButton}>
        <FontAwesomeIcon icon={faPlus} color={'#fff'} size={20} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: 'column',
    backgroundColor: 'blue',
  },
  item: {
    backgroundColor: 'blue',
    borderStyle: 'solid',
    width: '50%', // is 50% of container width
  },
  workspaceContainer: {
    flex: 1,
  },
  roundButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 15,
    padding: 15,
    borderRadius: 100,
    backgroundColor: '#007500',
  },
});
