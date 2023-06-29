import React, {useState} from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Appbar, TextInput, Button, Snackbar} from 'react-native-paper';
import apiInstance from '../../constants/apiInstance';
import {Loader} from '../../components/Loader';

export const CreateUser = ({navigation}) => {
  const [retypePassword, setRetypePassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [errServer, setErrServer] = useState(false);

  const validate = () => {
    let valid = true;
    if (!inputs.username?.trim()) {
      handleError('Please input username!', 'username');
      valid = false;
    } else handleError('', 'username');

    if (!inputs.email?.trim()) {
      handleError('Input valid email', 'email');
      valid = false;
    } else handleError('', 'email');

    if (valid) {
      handleSubmit();
    }
  };

  const handleOnChange = (text, input) => {
    setInputs(prev => ({...prev, [input]: text}));
  };
  const handleError = (errorMessage, input) => {
    setErrors(prev => ({...prev, [input]: errorMessage}));
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await apiInstance.post('/auth/register', {
        ...inputs,
      });
      navigation.navigate('Admin');
    } catch (error) {
      console.log(error);
      setErrServer(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Create User" />
      </Appbar.Header>
      <ScrollView>
        <View style={{padding: 15}}>
          <TextInput
            label={'Username'}
            value={inputs.name}
            onChangeText={text => handleOnChange(text, 'name')}
            style={styles.inputContainer}
            left={<TextInput.Icon icon={'account'} />}
            mode="outlined"
            error={errors.name}
          />
          <TextInput
            label={'Email'}
            value={inputs.email}
            onChangeText={text => handleOnChange(text, 'email')}
            style={styles.inputContainer}
            left={<TextInput.Icon icon={'email'} />}
            mode="outlined"
            error={errors.email}
          />

          <Button
            mode="contained-tonal"
            onPress={() => {
              validate();
            }}>
            Create
          </Button>
        </View>
      </ScrollView>
      <Snackbar
        icon={'information'}
        visible={errServer}
        onDismiss={() => setErrServer(false)}
        duration={3000}
        onIconPress={() => {}}>
        Error occur when create user
      </Snackbar>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 10,
  },
});
