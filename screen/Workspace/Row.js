import React from 'react';

export const Row = ({item, navigation}) => {
  return (
    <View style={{padding: 3}}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate('Detail', {detail: item});
        }}>
        <Text style={{fontWeight: '500'}}>{item.name}</Text>
        <View style={styles.memberContainer}>
          {item.members.map(img => (
            <Image
              source={{uri: img}}
              style={{
                width: 35,
                height: 35,
                borderRadius: 30,
                marginHorizontal: 2,
              }}
            />
          ))}
        </View>
      </TouchableOpacity>
    </View>
  );
};

import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F6F7FB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
    width: 240,
    minHeight: 50,
    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  memberContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'flex-end',
  },
});
