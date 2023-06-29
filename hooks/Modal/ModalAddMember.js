import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Portal, Modal, Button} from 'react-native-paper';
import {MultipleSelectList} from 'react-native-dropdown-select-list';
import useFetchApi from '../useFetchApi';
import apiInstance from '../../constants/apiInstance';

export const ModalAddMembers = (projectId, handleReload) => {
  const {data, loading, setLoading} = useFetchApi(
    `/project/employee-not-in-project/${projectId}`,
  );

  const dataSelectMember = data.map(member => ({
    key: member.email,
    value: member.name,
  }));
  const [visibleModalAddMember, setVisibleModalAddMember] = useState(false);
  const [selectMember, setSelectMember] = useState([]);
  const handleOpenModalAddMember = () => {
    setSelectMember([]);
    setVisibleModalAddMember(true);
  };
  const handleCloseModalAddMember = () => {
    setVisibleModalAddMember(false);
  };
  const handleSubmit = async () => {
    const dataPostMember = selectMember.map(item => ({
      email: item,
      projectId: projectId,
    }));
    await apiInstance.post('/project/add-employee-collab', {dataPostMember});
    handleCloseModalAddMember();
    handleReload();
    console.log(dataPostMember);
  };
  const modalAddMember = (
    <Portal>
      <Modal
        visible={visibleModalAddMember}
        onDismiss={handleCloseModalAddMember}
        style={{padding: 10}}>
        <View style={styles.modalContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 700,
              borderBottomWidth: 1,
              marginBottom: 10,
            }}>
            Add members
          </Text>
          <MultipleSelectList
            data={dataSelectMember}
            setSelected={val => setSelectMember(val)}
            save="key"
            disabledItemStyles={loading}
          />
          <Button mode="outlined" onPress={handleSubmit}>
            Add member
          </Button>
        </View>
      </Modal>
    </Portal>
  );

  return {
    handleOpenModalAddMember,
    handleCloseModalAddMember,
    modalAddMember,
    selectMember,
  };
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
});
