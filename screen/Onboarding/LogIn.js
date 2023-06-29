import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Modal, Portal, Snackbar, TextInput, useTheme} from 'react-native-paper';
import {AuthContext} from '../../context/AuthContext';
import {Button} from 'react-native-paper';
import {Loader} from '../../components/Loader';
import Clipboard from '@react-native-clipboard/clipboard';
import apiInstance from '../../constants/apiInstance';

export const LogIn = ({navigation}) => {
  const {isLoading, secretKey, setSecretKey, setUserInfor} =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [visibleSnackBar, setVisibleSnackBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visibleCopy, setVisibleCopy] = useState(false);

  const handleChange = () => {
    setShowPassword(prev => !prev);
  };

  const login = async ({username, password}) => {
    try {
      setLoading(true);
      const resData = await apiInstance.post(`/auth/login`, {
        username: username,
        password: password,
      });
      const data = resData.data;
      setSecretKey(data.key);
      setUserInfor({
        username: data.username,
      });
      if (data.key) {
        setVisible(true);
      } else {
        navigation.navigate('VerifyOTP');
      }
    } catch (e) {
      console.log(e);
      setVisibleSnackBar(true);
    } finally {
      setLoading(false);
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
          <Text style={{fontSize: 25, fontWeight: 600, marginTop: 20}}>
            TODO APP
          </Text>
          <Text>Log in to continue</Text>
          <TextInput
            mode="outlined"
            label="Username"
            autoCapitalize="none"
            editable={!isLoading}
            placeholder="Enter username"
            style={{width: '75%', marginTop: 40}}
            value={username}
            onChangeText={text => setUsername(text)}
          />

          <TextInput
            mode="outlined"
            label="Password"
            autoCapitalize="none"
            editable={!isLoading}
            placeholder="Enter password"
            secureTextEntry={showPassword ? false : true}
            style={{width: '75%', marginVertical: 15}}
            value={password}
            onChangeText={text => setPassword(text)}
            right={<TextInput.Icon icon="eye" onPress={handleChange} />}
          />
          <Button
            mode="contained"
            onPress={() => {
              Keyboard.dismiss();
              login({username, password});
            }}
            style={{
              backgroundColor: '#0C65E3',
              width: 200,
              marginBottom: 20,
            }}>
            Login
          </Button>
        </View>
      </ScrollView>
      {secretKey && (
        <Portal>
          <Modal visible={visible} contentContainerStyle={styles.modal}>
            <Text style={{fontSize: 20, fontWeight: 700}}>NOTIFICATION</Text>
            <Text style={{marginVertical: 10}}>
              Click to copy this secret key and use it in Google Authenticator
            </Text>
            <TouchableOpacity
              onPress={() => {
                Clipboard.setString(secretKey);
                setVisibleCopy(true);
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={{color: '#0C65E3', fontWeight: 500, fontSize: 16}}>
                  {secretKey}
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'flex-end',
                flexDirection: 'row',
                marginTop: 15,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setVisible(false);
                  navigation.navigate('VerifyOTP');
                }}>
                <Text style={{color: '#0C65E3', fontSize: 17, fontWeight: 600}}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
      )}
      <Snackbar
        visible={visibleCopy}
        duration={3000}
        onDismiss={() => setVisibleCopy(false)}>
        Copied!
      </Snackbar>
      <Snackbar
        visible={visibleSnackBar}
        onDismiss={() => setVisibleSnackBar(false)}>
        {'Invalid username or password'}
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
    alignItems: 'center',
    paddingVertical: 15,
    width: '100%',
    height: '100%',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 25,
    borderRadius: 7,
  },
});
