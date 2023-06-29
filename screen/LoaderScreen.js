import React from 'react';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';

export const LoaderScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../asset/logo.png')}
        style={{height: 100, width: 100, borderRadius: 10}}
      />
      <ActivityIndicator size={'large'} color={'#fff'} style={{margin: 20}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C65E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
