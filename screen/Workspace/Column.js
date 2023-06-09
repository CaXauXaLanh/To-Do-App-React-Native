import React from 'react';
import {FlatList, View, StyleSheet, Text, ScrollView} from 'react-native';
import {Row} from './Row';

export const Column = ({data, navigation}) => {
  return (
    <View style={styles.column}>
      <View style={styles.headerWrap}>
        <Text style={styles.headerText}>{data.name}</Text>
      </View>
      <ScrollView>
        {data.rows.map(item => (
          <Row item={item} navigation={navigation} />
        ))}
      </ScrollView>
      <View style={{paddingTop: 10}}>
        <Text style={{fontSize: 15, color: '#0C66E4', fontWeight: 500}}>
          {'+ Add task'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    backgroundColor: '#F8FAFB',
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
  },
  headerWrap: {
    paddingBottom: 15,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
