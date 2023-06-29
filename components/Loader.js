import React from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  ActivityIndicator,
  Text,
} from 'react-native';

export const Loader = ({visible = false}) => {
  const {height, width} = useWindowDimensions();
  return (
    visible && (
      <View style={[styles.constainer, {height, width}]}>
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} />
          <Text style={styles.text}>Loading...</Text>
        </View>
      </View>
    )
  );
};
const styles = StyleSheet.create({
  constainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    elevation: 10,
    zIndex: 10,
  },
  loader: {
    height: 70,
    backgroundColor: '#fff',
    marginHorizontal: 50,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    marginHorizontal: 15,
  },
});
