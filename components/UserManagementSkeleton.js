import React from 'react';

import {StyleSheet, Text, ScrollView} from 'react-native';
import {Skeleton} from '@rneui/themed';
import {Grid, Col, Row} from 'react-native-easy-grid';

export const UserManagementSkeleton = () => {
  return (
    <ScrollView style={styles.tableContainer}>
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

        <Row style={styles.row}>
          <Col size={1.5} style={styles.col}>
            <Skeleton height={20} />
          </Col>
          <Col size={6} style={styles.col}>
            <Skeleton height={20} />
          </Col>
          <Col size={2.5} style={styles.col}>
            <Skeleton height={20} />
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col size={1.5} style={styles.col}>
            <Skeleton height={20} />
          </Col>
          <Col size={6} style={styles.col}>
            <Skeleton height={20} />
          </Col>
          <Col size={2.5} style={styles.col}>
            <Skeleton height={20} />
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col size={1.5} style={styles.col}>
            <Skeleton height={20} />
          </Col>
          <Col size={6} style={styles.col}>
            <Skeleton height={20} />
          </Col>
          <Col size={2.5} style={styles.col}>
            <Skeleton height={20} />
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  tableContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {},
  col: {
    borderWidth: 1,
    padding: 10,
  },
  text: {
    // padding: 10,
    fontSize: 16,
  },
  textHeading: {
    fontWeight: 700,
  },
});
