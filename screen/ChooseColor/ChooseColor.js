import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const MAX_SCREEN_WIDTH = Dimensions.get('window').width;
const colorWidth = MAX_SCREEN_WIDTH / 3;
const colorHeight = MAX_SCREEN_WIDTH / 3;

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
                style={{
                  height: colorHeight,
                  width: '100%',
                  borderRadius: 10,
                }}
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
    // margin: 15,
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
    width: colorWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
