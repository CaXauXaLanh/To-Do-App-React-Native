import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Skeleton} from '@rneui/themed';

export const WorkspaceSkeleton = ({title}) => {
  return (
    <View style={styles.column}>
      <View style={styles.headerWrap}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <ScrollView>
        <Skeleton height={50} style={{marginBottom: 5}} />
        <Skeleton height={50} style={{marginBottom: 5}} />
        <Skeleton height={50} style={{marginBottom: 5}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    backgroundColor: '#F8FAFB',
    margin: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: 280,
  },
  headerWrap: {
    paddingBottom: 15,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
