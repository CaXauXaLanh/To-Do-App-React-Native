import React from 'react';

export const Row = ({item, navigation}) => {
  return (
    <View style={{padding: 3}}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F6F7FB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 240,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
