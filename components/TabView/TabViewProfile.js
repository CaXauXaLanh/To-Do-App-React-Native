import React, {useState} from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEarth} from '@fortawesome/free-solid-svg-icons';
import {TabView} from '@rneui/themed';

export default function TabViewProfile() {
  const [focusUsername, setfocusUsername] = useState(false);
  const [focusBio, setfocusBio] = useState(false);
  const [valueUsername, setValueUsername] = useState('httung');
  const [valueBio, setValueBio] = useState('');
  return (
    <TabView.Item style={styles.tabViewContainer}>
      <ScrollView>
        <View>
          <Image
            source={require('../../asset/user-detail-img.jpg')}
            style={{width: '100%', height: 70}}
          />
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#262626'}}>
            Manage your personal information
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              paddingTop: 30,
              borderColor: '#666',
            }}>
            <Text style={{fontSize: 22, fontWeight: 500, color: '#262626'}}>
              About
            </Text>
          </View>
          <View style={{paddingTop: 10}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#333'}}>
                Username
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesomeIcon
                  icon={faEarth}
                  style={{margin: 5}}
                  color={'#666'}
                />
                <Text>Always public</Text>
              </View>
            </View>
            <TextInput
              editable
              style={{
                borderWidth: 1,
                borderColor: focusUsername ? '#0C66E4' : '#ccc',
                height: 45,
                marginTop: 10,
                textAlignVertical: 'center',
                paddingLeft: 15,
                fontSize: 16,
              }}
              value={valueUsername}
              onChangeText={text => setValueUsername(text)}
              onFocus={() => {
                setfocusUsername(true);
              }}
              onBlur={() => {
                setfocusUsername(false);
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 16, fontWeight: 500, color: '#333'}}>
                Bio
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesomeIcon
                  icon={faEarth}
                  style={{margin: 5}}
                  color={'#666'}
                />
                <Text>Always public</Text>
              </View>
            </View>
            <TextInput
              editable
              style={{
                borderWidth: 1,
                borderColor: focusBio ? '#0C66E4' : '#ccc',
                height: 100,
                marginTop: 10,
                textAlignVertical: 'top',
                paddingLeft: 15,
                fontSize: 16,
              }}
              multiline
              numberOfLines={10}
              value={valueBio}
              onChangeText={text => setValueBio(text)}
              onFocus={() => {
                setfocusBio(true);
              }}
              onBlur={() => {
                setfocusBio(false);
              }}
            />
          </View>
          <View style={{marginTop: 30}}>
            <Button title={'Save'} />
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
});
