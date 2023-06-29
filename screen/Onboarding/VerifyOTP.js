import React, {useContext, useState} from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, Snackbar, Subheading, TextInput} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import {Loader} from '../../components/Loader';
import apiInstance from '../../constants/apiInstance';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const VerifyOTP = () => {
  const {userInfo, setUserInfor, setUserToken, setIsLoading} =
    useContext(AuthContext);
  const [otp, setOtp] = useState();
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = async ({otp}) => {
    try {
      setLoading(true);
      const resp = await apiInstance.post(`/auth/validate/key`, {
        username: userInfo.username,
        code: otp,
      });
      const data = resp.data;
      console.log(data);
      setUserInfor(prev => ({...prev, role: data.role, id: data.userId}));
      setUserToken(data.authenticationToken);
      AsyncStorage.setItem('userInfo', JSON.stringify(data));
      AsyncStorage.setItem('userToken', data.authenticationToken);
      setIsLoading(true);
    } catch (error) {
      setVisible(true);
      console.log(error);
    } finally {
      setLoading(false);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <ScrollView
        style={{
          flexGrow: 0,
          width: '80%',
        }}>
        <View style={styles.mainContainer}>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 20,
              color: '#404040',
              fontWeight: 600,
            }}>
            Verify OTP
          </Text>
          <TextInput
            label="Verify OTP"
            onChangeText={text => setOtp(text)}
            value={otp}
          />
          <Text style={{fontSize: 13}}>Get OTP from Google Authenticator</Text>
          <Button onPress={() => validate({otp})}>Verify</Button>
        </View>
      </ScrollView>
      <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
        Invalid OTP
      </Snackbar>
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
  mainContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    // alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%',
  },
});
