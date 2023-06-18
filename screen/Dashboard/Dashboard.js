import React, {useContext} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../../context/AuthContext';
import useFetchApi from '../../hooks/useFetchApi';

const MAX_WIDTH_SCREEN = Dimensions.get('window').width;

export const Dashboard = ({navigation}) => {
  const {logout, userInfo} = useContext(AuthContext);
  const {data, loading, fetched} = useFetchApi('/project/', []);

  return (
    <View style={styles.contain}>
      <View style={styles.headerWorkspace}>
        <Text style={styles.text}>TABLE</Text>
      </View>
      <View style={styles.workspaceWrapper}>
        {data.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Workspace', {image: item.img})}
            style={styles.taskWrapper}
            key={item.id}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={
                  item.image ||
                  require('../../asset/colorBackground/cool-blues.jpg')
                }
                style={styles.imageWorkspace}
              />
              <View style={styles.titleWorkspace}>
                <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
                  {item.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {userInfo.role === 'PM' && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Create Board');
          }}
          style={styles.roundButton}>
          <FontAwesomeIcon icon={faPlus} color={'#fff'} size={20} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  taskWrapper: {
    width: '50%',
    padding: 5,
  },
  workspaceWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
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
    width: '100%',
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
