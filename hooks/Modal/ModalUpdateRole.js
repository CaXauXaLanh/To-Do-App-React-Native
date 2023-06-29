import React, {useState} from 'react';
import {Modal, Portal} from 'react-native-paper';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import apiInstance from '../../constants/apiInstance';

export const ModalUpdateRole = ({visible, setVisible, id, setLoading}) => {
  const [selectedValue, setSelectedValue] = useState('tester');
  const selection = [
    {
      label: 'Tester',
      value: 'tester',
    },
    {
      label: 'PM',
      value: 'pm',
    },
    {
      label: 'Admin',
      value: 'admin',
    },
  ];

  const handleChangeRole = async ({role}) => {
    try {
      setLoading(true);
      await apiInstance.put(`/admin/manage-employee/update-role`, {
        id: id,
        role: role,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={() => setVisible(false)}>
        <ScrollView style={styles.modalContainer}>
          <View>
            <Text style={styles.headerModal}>ACTION</Text>
            <Text style={styles.text}>Update role</Text>
            <Picker
              style={{borderWidth: 1}}
              mode={'dropdown'}
              selectedValue={selectedValue}
              onValueChange={async (itemValue, itemIndex) => {
                setSelectedValue(itemValue);
                await handleChangeRole({role: itemValue});
              }}>
              {selection.map(item => (
                <Picker.Item label={item.label} value={item.value} />
              ))}
            </Picker>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
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
