import axios from 'axios';
import {BASE_URL} from '../config/config';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const {userToken} = useContext(AuthContext);

const apiInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer' + ' ' + userToken,
  },
});

export default apiInstance;
