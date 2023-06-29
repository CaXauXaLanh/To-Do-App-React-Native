import React, {useState} from 'react';
import {TabView} from '@rneui/themed';
import {ScrollView, StyleSheet, Text, View, RefreshControl} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid';
import {IconButton} from 'react-native-paper';
import {ModalUpdateRole} from '../../hooks/Modal/ModalUpdateRole';
import {Loader} from '../Loader';

const Action = index => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
      }}>
      <IconButton icon={'lead-pencil'} />
    </View>
  );
};

export const TabTester = ({
  data,
  refreshing,
  onRefresh,
  setLoading,
  loading,
}) => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [input, setInput] = useState({
    id: null,
    role: null,
  });
  return (
    <TabView.Item style={{width: '100%'}}>
      <ScrollView
        style={styles.tableContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Loader visible={loading} />
        <Grid>
          <Row style={styles.row}>
            <Col size={1.5} style={styles.col}>
              <Text style={[styles.text, styles.textHeading]}>ID</Text>
            </Col>
            <Col size={6} style={styles.col}>
              <Text style={[styles.text, styles.textHeading]}>User</Text>
            </Col>
            <Col size={2.5} style={styles.col}>
              <Text style={[styles.text, styles.textHeading]}>Action</Text>
            </Col>
          </Row>
          {data.map(item => (
            <Row style={styles.row}>
              <Col size={1.5} style={styles.col}>
                <Text style={styles.text}>{item.id}</Text>
              </Col>
              <Col size={6} style={styles.col}>
                <Text style={styles.text}>{item.name}</Text>
              </Col>
              <Col size={2.5} style={styles.col}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                  }}>
                  <IconButton
                    icon={'lead-pencil'}
                    onPress={() => {
                      setInput({id: item.id, role: item.role});
                      setVisibleModal(true);
                    }}
                  />
                </View>
              </Col>
            </Row>
          ))}
        </Grid>
        <ModalUpdateRole
          visible={visibleModal}
          setVisible={setVisibleModal}
          {...input}
          setLoading={setLoading}
        />
      </ScrollView>
    </TabView.Item>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    height: '50%',
  },
  row: {},
  col: {
    borderWidth: 1,
  },
  text: {
    padding: 10,
    fontSize: 16,
  },
  textHeading: {
    fontWeight: 700,
  },
});
