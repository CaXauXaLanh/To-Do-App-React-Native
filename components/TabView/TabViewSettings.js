import React, {useState} from 'react';
import {TabView} from '@rneui/themed';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';

export default function TabViewSettings() {
  const [open, setOpen] = useState(false);
  const handleChangeOpen = () => {
    setOpen(prevState => !prevState);
  };

  const [focusOldPassword, setFocusOldPassword] = useState(false);
  const [focusNewPassword, setFocusNewPassword] = useState(false);
  const [focusRetypePassword, setFocusRetypePassword] = useState(false);

  const [valueOldPass, setValueOldPass] = useState('');
  const [valueNewPass, setValueNewPass] = useState('');
  const [valueRetypePass, setValueRetypePass] = useState('');

  const [hideOldPass, setHideOldPass] = useState(true);
  const [hideNewPass, setHideNewPass] = useState(true);
  const [hideRetypePass, setHideRetypePass] = useState(true);

  return (
    <TabView.Item style={styles.tabViewContainer}>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#e6e6e6',
              alignItems: 'center',
              padding: 15,
              borderRadius: 6,
            }}>
            <Text style={{fontWeight: 500, fontSize: 16}}>Account setting</Text>
          </View>
          <View>
            <View
              style={{
                alignItems: 'center',
                width: 135,
                margin: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity onPress={handleChangeOpen}>
                <Text
                  style={{
                    backgroundColor: '#e6e6e6',
                    width: '100%',
                    padding: 10,
                    borderWidth: 1,
                    borderRadius: 6,
                  }}>
                  Change password
                </Text>
              </TouchableOpacity>
            </View>
            {open && (
              <View style={styles.changePassContain}>
                <View style={styles.headerAndInput}>
                  <Text style={{fontSize: 16, fontWeight: 500, color: '#333'}}>
                    Old password
                  </Text>
                  <View
                    style={[
                      styles.inputContain,
                      {borderColor: focusOldPassword ? '#0C66E4' : '#ccc'},
                    ]}>
                    <TextInput
                      editable
                      style={{
                        flex: 1,
                        height: 45,
                        textAlignVertical: 'center',
                        paddingLeft: 15,
                        fontSize: 16,
                        borderWidth: 0,
                      }}
                      secureTextEntry={hideOldPass}
                      value={valueOldPass}
                      onChangeText={text => setValueOldPass(text)}
                      onFocus={() => {
                        setFocusOldPassword(true);
                      }}
                      onBlur={() => {
                        setFocusOldPassword(false);
                      }}
                      underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity
                      onPressIn={() => {
                        setHideOldPass(false);
                      }}
                      onPressOut={() => {
                        setHideOldPass(true);
                      }}>
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{padding: 10, margin: 10}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/*Old password*/}
                <View style={styles.headerAndInput}>
                  <Text style={{fontSize: 16, fontWeight: 500, color: '#333'}}>
                    New password
                  </Text>
                  <View
                    style={[
                      styles.inputContain,
                      {borderColor: focusNewPassword ? '#0C66E4' : '#ccc'},
                    ]}>
                    <TextInput
                      editable
                      style={{
                        flex: 1,
                        height: 45,
                        textAlignVertical: 'center',
                        paddingLeft: 15,
                        fontSize: 16,
                        borderWidth: 0,
                      }}
                      secureTextEntry={hideNewPass}
                      value={valueNewPass}
                      onChangeText={text => setValueNewPass(text)}
                      onFocus={() => {
                        setFocusNewPassword(true);
                      }}
                      onBlur={() => {
                        setFocusNewPassword(false);
                      }}
                      underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity
                      onPressIn={() => {
                        setHideNewPass(false);
                      }}
                      onPressOut={() => {
                        setHideNewPass(true);
                      }}>
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{padding: 10, margin: 10}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {/*New password*/}
                <View style={styles.headerAndInput}>
                  <Text style={{fontSize: 16, fontWeight: 500, color: '#333'}}>
                    Retype password
                  </Text>
                  <View
                    style={[
                      styles.inputContain,
                      {borderColor: focusRetypePassword ? '#0C66E4' : '#ccc'},
                    ]}>
                    <TextInput
                      editable
                      style={{
                        flex: 1,
                        height: 45,
                        textAlignVertical: 'center',
                        paddingLeft: 15,
                        fontSize: 16,
                        borderWidth: 0,
                      }}
                      secureTextEntry={hideRetypePass}
                      value={valueRetypePass}
                      onChangeText={text => setValueRetypePass(text)}
                      onFocus={() => {
                        setFocusRetypePassword(true);
                      }}
                      onBlur={() => {
                        setFocusRetypePassword(false);
                      }}
                      underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity
                      onPressIn={() => {
                        setHideRetypePass(false);
                      }}
                      onPressOut={() => {
                        setHideRetypePass(true);
                      }}>
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{padding: 10, margin: 10}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginTop: 30}}>
                  <Button title={'Save'} />
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </TabView.Item>
  );
}
const styles = StyleSheet.create({
  tabViewContainer: {
    padding: 15,
    flex: 1,
  },
  inputContain: {
    marginTop: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  changePassContain: {
    borderRadius: 6,
    margin: 15,
    marginTop: -15,
    borderWidth: 1,
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  headerAndInput: {
    marginTop: 10,
  },
});
