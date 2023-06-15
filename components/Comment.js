import React from 'react';

import {Image, View, Text, StyleSheet} from 'react-native';

export const Comment = ({dataComment}) => {
  return (
    <View style={styles.commentListContain}>
      {dataComment.map(comment => (
        <View style={styles.commentContain}>
          <Image source={{uri: comment.image}} style={styles.avatar} />
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 15, fontWeight: 500, color: '#1a1a1a'}}>
              {comment.name}
            </Text>
            <Text style={styles.comment}>{comment.text}</Text>
          </View>
        </View>
      ))}
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
