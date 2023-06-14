import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark, faUserCircle, faList} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';

const defaultText =
  'This is text Description with 4 lines\nThis is text Description with 4 lines\nThis is text Description with 4 lines\nThis is text Description with 4 lines\n';

export const DetailTask = ({item, navigation}) => {
  const [textDesc, setTextDesc] = useState(defaultText);

  return (
    <>
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <View style={[styles.header]}>
            <View style={{borderBottomWidth: 0.5}}>
              <View style={{margin: 15}}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <FontAwesomeIcon icon={faXmark} size={30} />
                  </TouchableOpacity>
                  <Text style={[styles.headerText, {color: '#000'}]}>
                    Task 1
                  </Text>
                  <Text style={{marginTop: 10}}>in list Workspace 1</Text>
                </View>
              </View>
            </View>
            <View style={{borderBottomWidth: 0.5, borderBottomColor: '#ccc'}}>
              <View style={{margin: 15}}>
                <Text style={{fontSize: 16, fontWeight: 500, color: 'black'}}>
                  Quick action
                </Text>
                <TouchableOpacity>
                  <View style={styles.buttonUser}>
                    <View
                      style={{
                        padding: 10,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                      }}>
                      <FontAwesomeIcon
                        icon={faUserCircle}
                        color="#008000"
                        style={{marginRight: 10}}
                        size={22}
                      />
                      <Text>Members</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.content}>
            <View style={{margin: 15}}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  color: '#2f2f1e',
                  borderBottomWidth: 0.5,
                }}>
                Description
              </Text>
              <View
                style={{flexDirection: 'row', marginTop: 10, width: '100%'}}>
                <FontAwesomeIcon icon={faList} style={{margin: 15}} />
                <TextInput
                  editable
                  multiline
                  style={{
                    fontSize: 15,
                    color: '#2f2f1e',
                    borderBottomWidth: 0.5,
                    lineHeight: 22,
                  }}
                  value={textDesc}
                  onChangeText={text => setTextDesc(text)}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.commentContain}>
        <Image
          source={require('../../asset/avatar.jpg')}
          style={styles.avatar}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ebebe0',
  },
  header: {
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
  },
  headerText: {
    paddingTop: 40,
    fontSize: 25,
    fontWeight: 500,
  },
  buttonUser: {
    borderRadius: 6,
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    width: 130,
    height: 45,
  },
  content: {
    marginTop: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#c3c3a2',
    borderTopColor: '#c3c3a2',
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 30,
  },
  commentContain: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
});
