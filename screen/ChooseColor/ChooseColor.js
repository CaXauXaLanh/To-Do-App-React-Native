import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export const ChooseColor = ({route, navigation}) => {
  const {colors, setColor} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.containerColor}>
        {colors.map(item => (
          <TouchableOpacity
            onPress={() => {
              setColor(item.value);
              navigation.goBack();
            }}>
            <View style={styles.color}>
              <Image
                source={item.value}
                style={{height: 110, width: 110, borderRadius: 10}}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  containerColor: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  color: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
