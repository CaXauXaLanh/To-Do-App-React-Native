import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Row} from './Row';

export const Column = ({data, navigation, title, handleReload}) => {
  return (
    <View style={styles.column}>
      <View style={styles.headerWrap}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <ScrollView>
        {data.map(item => (
          <Row
            item={item}
            navigation={navigation}
            handleReload={handleReload}
          />
        ))}
      </ScrollView>
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
