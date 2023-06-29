import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Skeleton} from '@rneui/themed';

export const CommentSkeleton = () => {
  return (
    <View style={styles.commentListContain}>
      <View style={styles.commentContain}>
        <Skeleton circle={true} height={50} width={50} />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}>
          <Skeleton height={16} width={'30%'} />
          <Skeleton height={40} width={'80%'} style={{marginTop: 10}} />
        </View>
      </View>
      <View style={styles.commentContain}>
        <Skeleton circle={true} height={50} width={50} />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
          }}>
          <Skeleton height={16} width={'30%'} />
          <Skeleton height={40} width={'80%'} style={{marginTop: 10}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  commentListContain: {
    marginLeft: 15,
    marginBottom: 15,
  },
  commentContain: {
    flexDirection: 'row',
    display: 'flex',
    flex: 1,
    marginTop: 30,
  },
  comment: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    maxWidth: '85%',
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    color: '#4d4d4d',
  },
});
