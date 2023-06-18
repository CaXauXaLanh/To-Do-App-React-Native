import React from 'react';

import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const Step1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../asset/onboarding.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.signInButon}
            onPress={() => navigation.navigate('LogIn')}>
            <Text
              style={{
                padding: 10,
                fontSize: 16,
                color: '#fff',
                fontWeight: 500,
              }}>
              Log In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButon} onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                padding: 10,
                fontSize: 16,
                color: '#0C65E3',
                fontWeight: 500,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'flex-end',
    flex: 0.75,
  },
  signInButon: {
    marginHorizontal: 30,
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 5,
  },
  signUpButon: {
    marginHorizontal: 30,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderWidth: 0,
    alignItems: 'center',
    borderRadius: 5,
  },
});
