/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Dashboard from './screens/Dashboard';


export default function App() {
  return (
    <Dashboard/>
  );
}

