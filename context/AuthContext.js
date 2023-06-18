import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../config/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState('');
  const [userInfo, setUserInfor] = useState({});
  
  const login = async ({username, password}) => {
    try {
      setIsLoading(true);
      const resData = await axios.post(
        `${BASE_URL}/auth/login`,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = resData.data;
      console.log('aaaaaaaaaaaa');
      setUserInfor({
        username: data.username,
        role: data.role,
      });
      setUserToken(data.authenticationToken);
      AsyncStorage.setItem('userToken', data.authenticationToken);
      
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userTokenStorage = await AsyncStorage.getItem('userToken');
      setUserToken(userTokenStorage);
    } catch (e) {
      console.error(`Logged in fail in ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, setIsLoading, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
