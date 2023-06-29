import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../config/config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState('');
  const [userInfo, setUserInfor] = useState({});
  const [secretKey, setSecretKey] = useState('');
  const [error, setError] = useState('');
  const apiInstance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer' + ' ' + userToken,
    },
  });

  const logout = () => {
    setUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('userToken');
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userTokenStorage = await AsyncStorage.getItem('userToken');
      let userInfoStorage = await AsyncStorage.getItem('userInfo');
      userInfoStorage = JSON.parse(userInfoStorage);
      if (userInfoStorage) {
        setUserToken(userTokenStorage);
        setUserInfor({
          username: userInfoStorage.username,
          role: userInfoStorage.role,
          id: userInfoStorage.userId,
        });
      }
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
      value={{
        logout,
        isLoading,
        userToken,
        setIsLoading,
        userInfo,
        secretKey,
        setSecretKey,
        error,
        setUserInfor,
        setUserToken,
        apiInstance,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
