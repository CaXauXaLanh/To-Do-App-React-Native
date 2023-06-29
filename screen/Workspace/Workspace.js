import React, {useContext, useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text,
  Dimensions,
  TextInput,
  RefreshControl,
} from 'react-native';
import {Appbar, Menu, Portal, Modal, Button} from 'react-native-paper';
import {Column} from './Column';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from '../../context/AuthContext';
import {WorkspaceSkeleton} from '../../components/WorkspaceSkeleton';
import useFetchApi from '../../hooks/useFetchApi';
import apiInstance from '../../constants/apiInstance';
import {SelectList} from 'react-native-dropdown-select-list';
import {ModalAddMembers} from '../../hooks/Modal/ModalAddMember';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Workspace = ({navigation, route}) => {
  const {userInfo} = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [visibleCreate, setVisibleCreate] = useState(false);
  const [visibleModalCreate, setVisibleModalCreate] = useState(false);
  const {image, projectId, title} = route.params;
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [memberSelect, setMemberSelect] = useState('');
  const {
    data: taskList,
    fetched: fetchedProject,
    loading: loadingProject,
    setLoading: setLoadingProject,
    refetch: refetchProject,
  } = useFetchApi(`/task/getAll/?projectId=${projectId}`);
  const {
    data: memberList,
    loading: loadingMember,
    setLoading: setLoadingMember,
    fetched: fetchedMember,
    refetch: refetchMember,
  } = useFetchApi(`/project/employee-project/?projectId=${projectId}`);
  const handleReload = () => {
    refetchProject;
    refetchMember;
  };
  const {
    handleOpenModalAddMember,
    handleCloseModalAddMember,
    modalAddMember,
    selectMember,
  } = ModalAddMembers(projectId, handleReload);
  const todo = taskList.filter(task => task.status === 'todo');
  const doing = taskList.filter(task => task.status === 'doing');
  const waiting_review = taskList.filter(
    task => task.status === 'waiting-review',
  );
  const done = taskList.filter(task => task.status === 'done');
  const dataSelectMember = memberList
    .filter(member => member.role?.toLowerCase() === 'tester')
    .map(member => ({key: member.id, value: member.name}));
  const handleCreateTask = async () => {
    try {
      setLoadingProject(true);
      await apiInstance.post('/task/create', {
        name: taskName,
        description: description,
        projectId: projectId,
        employeeId: memberSelect,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingProject(false);
    }
  };
  const onRefresh = () => {
    try {
      setRefreshing(true);
      refetchProject('/task/create');
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

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

      <Appbar.Header mode="small">
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={title} />
        {userInfo.role?.toLowerCase() === 'pm' && (
          <Appbar.Action
            icon={'dots-vertical'}
            onPress={() => setOpenMenu(true)}
          />
        )}
      </Appbar.Header>

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

      <ImageBackground source={image} style={styles.workspaceContainer}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{flex: 1}}>
          {(loadingProject && !fetchedProject) ||
          (loadingMember && fetchedMember) ? (
            <>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <WorkspaceSkeleton title={'TODO'} />
                <WorkspaceSkeleton title={'DOING'} />
                <WorkspaceSkeleton title={'DONE'} />
              </ScrollView>
            </>
          ) : (
            <>
              <View style={{paddingTop: 10}}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  <Column data={todo} navigation={navigation} title="TODO" />
                  <Column data={doing} navigation={navigation} title="DOING" />
                  <Column
                    data={waiting_review}
                    navigation={navigation}
                    title="WAITING REVIEW"
                  />
                  <Column
                    data={done}
                    navigation={navigation}
                    title="DONE"
                    handleReload={onRefresh}
                  />
                </ScrollView>
              </View>
            </>
          )}
        </ScrollView>
      </ImageBackground>
      {userInfo.role?.toLowerCase() === 'pm' && (
        <TouchableOpacity
          onPress={() => setVisibleCreate(true)}
          style={styles.roundButton}>
          <FontAwesomeIcon icon={faPlus} color={'#fff'} size={20} />
        </TouchableOpacity>
      )}
      <Menu
        visible={visibleCreate}
        onDismiss={() => setVisibleCreate(false)}
        anchor={{x: windowWidth * 0.95, y: windowHeight * 0.75}}
        anchorPosition="bottom">
        <Menu.Item
          title="Create task"
          onPress={() => {
            setVisibleModalCreate(true);
            setVisibleCreate(false);
          }}
        />
        <Menu.Item
          title="Add members"
          onPress={() => {
            handleOpenModalAddMember();
            setVisibleCreate(false);
          }}
        />
      </Menu>
      <Portal>
        <Modal
          visible={visibleModalCreate}
          onDismiss={() => setVisibleModalCreate(false)}
          style={{padding: 10}}>
          <View style={styles.modalContainer}>
            <View style={styles.boardNameInput}>
              <Text style={{fontSize: 14, color: '#3F51B5'}}>Task name</Text>
              <TextInput
                editable
                value={taskName}
                onChangeText={text => setTaskName(text)}
                style={{
                  borderBottomWidth: 2,
                  textAlignVertical: 'bottom',
                  marginTop: -15,
                  borderColor: '#0d98d9',
                }}
              />
            </View>
            <View style={styles.boardNameInput}>
              <Text style={{fontSize: 14, color: '#3F51B5'}}>Description</Text>
              <TextInput
                editable
                multiline={true}
                numberOfLines={2}
                value={description}
                onChangeText={text => setDescription(text)}
                style={{
                  borderBottomWidth: 2,
                  textAlignVertical: 'top',
                  borderColor: '#0d98d9',
                }}
              />
            </View>
            <Text style={{fontSize: 16, marginVertical: 10}}>
              Select Tester
            </Text>
            <SelectList
              setSelected={val => setMemberSelect(val)}
              data={dataSelectMember}
              save="key"
            />
            <Button
              style={{backgroundColor: '#0d98d9', marginTop: 10}}
              mode="contained"
              disabled={
                taskName.trim() === '' || loadingMember || loadingProject
              }
              onPress={async () => {
                await handleCreateTask();
                onRefresh();
                setVisibleModalCreate(false);
              }}>
              Create task
            </Button>
          </View>
        </Modal>
      </Portal>
      {modalAddMember}
    </>
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
  containerStyle: {backgroundColor: 'white', padding: 20, marginHorizontal: 25},
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
  boardNameInput: {
    backgroundColor: '#e6e6e6',
    padding: 10,
    marginVertical: 10,
  },
});
