import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Keyboard, Button} from 'react-native';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {AuthContext} from '../../context/AuthContext';

export const LogIn = () => {
  const {isLoading, login} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 22}}>TODO APP</Text>
        <Text>Log in to continue</Text>
        <TextInput
          editable={!isLoading}
          placeholder="Enter email"
          style={{borderWidth: 1, width: '75%'}}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          editable={!isLoading}
          placeholder="Enter password"
          // secureTextEntry={true}
          style={{borderWidth: 1, width: '75%'}}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Button
          title="Log in"
          onPress={() => {
            Keyboard.dismiss();
            login({username, password});
          }}
        />
      </View>
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
    height: '60%',
    width: '80%',
    alignItems: 'center',
  },
});
