import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>My Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    height: 80,
    paddingTop: 20,
    backgroundColor: 'coral',
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 25
  },
});
