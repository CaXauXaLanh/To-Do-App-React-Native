import React, {useContext, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Keyboard,
  FlatList,
  RefreshControl,
} from 'react-native';
import {Appbar, Menu, Portal, Modal} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faList,
  faPaperPlane,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import {AvatarText} from '../../components/Avatar';
import {TextInput} from 'react-native-gesture-handler';
import {Comment} from '../../components/Comment';
import {CommentSkeleton} from '../../components/CommentSkeleton';
import useFetchApi from '../../hooks/useFetchApi';
import {AuthContext} from '../../context/AuthContext';
import apiInstance from '../../constants/apiInstance';

export const DetailTask = ({route, navigation}) => {
  const {detail, handleReload} = route.params;
  const {userInfo} = useContext(AuthContext);
  const {
    data: comments,
    loading,
    setLoading,
    fetched,
    refetch,
  } = useFetchApi(`/comment/${detail.id}`);
  const [textDesc, setTextDesc] = useState(detail.description);
  const [textCmt, setTextCmt] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [header, setHeader] = useState(detail.name);
  const [edit, setEdit] = useState(false);
  const [visibleStatusSelect, setVisibleStatusSelect] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const [refreshing, setRefreshing] = useState(false);
  const handleChaneStatus = async status => {
    try {
      setLoading(true);
      await apiInstance.put('task/change-status', {
        status: status,
        id: detail.id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const onRefresh = () => {
    try {
      setRefreshing(true);
      refetch(`/comment/${detail.id}`);
    } catch (e) {
      console.log(e);
    } finally {
      setRefreshing(false);
    }
  };
  const handleSubmitComment = async () => {
    try {
      setLoading(true);
      await apiInstance.post(`/comment`, {
        content: textCmt,
        taskID: detail.id,
        employeeId: userInfo.id,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setTextCmt('');
    }
  };

  const valueSelect = [
    {
      label: 'To do',
      value: 'todo',
    },
    {
      label: 'Doing',
      value: 'doing',
    },
    {
      label: 'Waiting Review',
      value: 'waiting-review',
    },
    {
      label: 'Done',
      value: 'done',
    },
  ];

  return (
    <>
      <Portal>
        <Modal
          visible={openModal}
          onDismiss={() => setOpenModal(false)}
          contentContainerStyle={styles.containerStyle}>
          <Text style={{fontSize: 18, fontWeight: 500, color: '#161616'}}>
            Delete Task
          </Text>
          <Text style={{marginTop: 10}}>
            Task will be deleted. There is no undo
          </Text>
        </Modal>
      </Portal>
      {edit ? (
        <Appbar.Header mode="large">
          <Appbar.BackAction onPress={() => setEdit(false)} />
          <Appbar.Content title={header} />
          {userInfo.role?.toLowerCase() === 'pm' && (
            <Appbar.Action
              icon={'check'}
              onPress={() => {
                setEdit(false);
                Keyboard.dismiss();
              }}
            />
          )}
        </Appbar.Header>
      ) : (
        <Appbar.Header mode="large">
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title={header} />
          {userInfo.role?.toLowerCase() === 'pm' && (
            <Appbar.Action
              icon={'dots-vertical'}
              onPress={() => setOpenMenu(true)}
            />
          )}
        </Appbar.Header>
      )}

      <View>
        <Menu
          visible={openMenu}
          onDismiss={() => setOpenMenu(false)}
          anchor={{x: windowWidth * 0.95, y: 50}}>
          <Menu.Item
            onPress={() => {
              setOpenModal(true);
              setOpenMenu(false);
            }}
            title="Delete"
            titleStyle={{color: 'red'}}
          />
        </Menu>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.container}>
          <View style={styles.content}>
            <View style={{margin: 15}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#2f2f1e',
                  borderBottomWidth: 0.5,
                }}>
                Description
              </Text>
              <View
                style={{flexDirection: 'row', marginTop: 10, width: '100%'}}>
                <FontAwesomeIcon icon={faList} style={{margin: 15}} />
                <TextInput
                  editable
                  multiline
                  style={{
                    fontSize: 15,
                    color: '#2f2f1e',
                    borderBottomWidth: 0.5,
                    lineHeight: 22,
                  }}
                  value={textDesc}
                  onChangeText={text => {
                    setTextDesc(text);
                    setEdit(true);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.statusContainer}>
            <View
              style={{
                marginHorizontal: 15,
                flex: 1,
                height: 220,
              }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginTop: 10,
                  color: '#2f2f1e',
                  borderBottomWidth: 0.5,
                }}>
                Status
              </Text>
              <View>
                <View
                  style={{
                    margin: 15,
                    marginBottom: 0,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    width: 200,
                  }}>
                  <TouchableOpacity
                    onPress={() => setVisibleStatusSelect(prev => !prev)}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 10,
                      }}>
                      <Text style={{fontSize: 16, color: '#2f2f1e'}}>
                        {
                          valueSelect.find(
                            select => select.value === detail.status,
                          ).label
                        }
                      </Text>
                      <FontAwesomeIcon icon={faChevronDown} size={18} />
                    </View>
                  </TouchableOpacity>
                </View>
                {visibleStatusSelect && (
                  <View style={{width: 200, marginLeft: 15}}>
                    <TouchableOpacity
                      style={{borderWidth: 1}}
                      onPress={async () => {
                        await handleChaneStatus('todo');
                        handleReload();
                        navigation.goBack();
                      }}>
                      <Text style={styles.textStatus}>Todo</Text>
                    </TouchableOpacity>

                    {userInfo.role?.toLowerCase() === 'tester' && (
                      <>
                        <TouchableOpacity
                          style={{borderWidth: 1}}
                          onPress={async () => {
                            await handleChaneStatus('doing');
                            handleReload();
                            navigation.goBack();
                          }}>
                          <Text style={styles.textStatus}>Doing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={{borderWidth: 1}}
                          onPress={async () => {
                            await handleChaneStatus('waiting-review');
                            handleReload();
                            navigation.goBack();
                          }}>
                          <Text style={styles.textStatus}>Waiting Review</Text>
                        </TouchableOpacity>
                      </>
                    )}

                    {userInfo.role?.toLowerCase() === 'pm' && (
                      <TouchableOpacity
                        style={{borderWidth: 1}}
                        onPress={async () => {
                          await handleChaneStatus('done');
                          handleReload();
                          navigation.goBack();
                        }}>
                        <Text style={styles.textStatus}>Done</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
              </View>
            </View>
          </View>
          {loading && !fetched ? (
            <CommentSkeleton />
          ) : (
            <Comment dataComment={comments} />
          )}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <AvatarText role={userInfo.role} />
        <View style={styles.inputContain}>
          <TextInput
            disabled={loading}
            editable
            style={{
              flex: 1,
              height: 45,
              textAlignVertical: 'center',
              paddingLeft: 15,
              fontSize: 16,
              borderWidth: 0,
            }}
            value={textCmt}
            onChangeText={text => setTextCmt(text)}
            underlineColorAndroid="transparent"
            placeholder="Add comment"
          />
          <TouchableOpacity
            disabled={!textCmt.trim() || loading}
            onPress={async () => {
              await handleSubmitComment();
              onRefresh();
            }}>
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{padding: 10, margin: 10}}
              color={textCmt.trim() ? '#1a1aff' : '#ccc'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e6e6e6',
  },
  header: {
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
  },
  headerText: {
    paddingTop: 40,
    fontSize: 25,
    fontWeight: 500,
  },
  buttonUser: {
    borderRadius: 6,
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    width: 130,
    height: 45,
  },
  content: {
    marginTop: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#c3c3a2',
    borderTopColor: '#c3c3a2',
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  footer: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  inputContain: {
    marginTop: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    marginLeft: 15,
    borderRadius: 20,
    marginBottom: 10,
    borderColor: '#ccc',
  },
  statusContainer: {
    marginTop: 15,
    backgroundColor: '#fff',
  },
  memberList: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  containerStyle: {backgroundColor: 'white', padding: 20, marginHorizontal: 25},
  textStatus: {
    fontSize: 16,
    color: '#2f2f1e',
    padding: 5,
  },
});
