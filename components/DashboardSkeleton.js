import React from 'react';

import {View, StyleSheet} from 'react-native';
import {Skeleton} from '@rneui/themed';

export const DashboardSkeleton = () => {
  return (
    <View style={styles.workspaceWrapper}>
      <View style={{padding: 5, width: '50%', height: 120}}>
        <Skeleton height={'100%'} />
      </View>
      <View style={{padding: 5, width: '50%', height: 120}}>
        <Skeleton height={'100%'} />
      </View>
      <View style={{padding: 5, width: '50%', height: 120}}>
        <Skeleton height={'100%'} />
      </View>
      <View style={{padding: 5, width: '50%', height: 120}}>
        <Skeleton height={'100%'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workspaceWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
});
