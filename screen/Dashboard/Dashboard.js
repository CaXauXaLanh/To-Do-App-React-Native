import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export const Dashboard = ({navigation}) => {
  return (
    <View style={styles.contain}>
      <View style={styles.headerWorkspace}>
        <Text style={styles.text}>TABLE</Text>
      </View>
      <View style={styles.workspaceWrapper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Workspace')}
          style={styles.taskWrapper}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../asset/background1.jpg')}
              style={styles.imageWorkspace}
            />
            <View style={styles.titleWorkspace}>
              <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
                This is a workspaceadasdasdsaddsadsafsdffsd
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Workspace')}
          style={styles.taskWrapper}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../asset/background2.jpg')}
              style={styles.imageWorkspace}
            />
            <View style={styles.titleWorkspace}>
              <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
                This is a workspace
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Workspace')}
          style={styles.taskWrapper}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../asset/background3.jpg')}
              style={styles.imageWorkspace}
            />
            <View style={styles.titleWorkspace}>
              <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
                This is a workspace
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('haha');
        }}
        style={styles.roundButton}>
        <FontAwesomeIcon icon={faPlus} color={'#fff'} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  taskWrapper: {
    padding: 5,
  },
  workspaceWrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
  },
  headerWorkspace: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 2.5,
    borderColor: '#0C66E4',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: '#0C66E4',
    margin: 0,
    padding: 15,
    fontWeight: 'bold',
  },
  imageWorkspace: {
    height: 120,
    width: 180,
    borderRadius: 5,
  },
  titleWorkspace: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    opacity: 0.6,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '30%',
    borderRadius: 5,
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
