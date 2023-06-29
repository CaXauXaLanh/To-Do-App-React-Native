import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../../context/AuthContext';
import useFetchApi from '../../hooks/useFetchApi';
import {DashboardSkeleton} from '../../components/DashboardSkeleton';

const MAX_WIDTH_SCREEN = Dimensions.get('window').width;

export const Dashboard = ({navigation}) => {
  const {userInfo} = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const {data, loading, fetched, refetch, setLoading} = useFetchApi(
    `/project/${userInfo.id}`,
    [],
  );

  const onRefresh = () => {
    try {
      setRefreshing(true);
      refetch(`/project/${userInfo.id}`);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <>
      <ScrollView
        style={styles.contain}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.headerWorkspace}>
          <Text style={styles.text}>TABLE</Text>
        </View>
        {loading && !fetched ? (
          <DashboardSkeleton />
        ) : (
          <>
            <View style={styles.workspaceWrapper}>
              {data.map(item => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Workspace', {
                      image:
                        item.img ||
                        require('../../asset/colorBackground/cool-blues.jpg'),
                      projectId: item.id,
                      title: item.name,
                    })
                  }
                  style={styles.taskWrapper}
                  key={item.id}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      source={
                        item.img ||
                        require('../../asset/colorBackground/cool-blues.jpg')
                      }
                      style={styles.imageWorkspace}
                    />
                    <View style={styles.titleWorkspace}>
                      <TouchableOpacity>
                        <Text style={{color: 'rgba(255, 255, 255, 1)'}}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
      </ScrollView>
      {userInfo.role?.toLowerCase() === 'pm' && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Create Board', {
              loading: loading,
              setLoading: setLoading,
              handleReload: onRefresh,
            });
          }}
          style={styles.roundButton}>
          <FontAwesomeIcon icon={faPlus} color={'#fff'} size={20} />
        </TouchableOpacity>
      )}
    </>
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
    position: 'absolute',
  },
});
