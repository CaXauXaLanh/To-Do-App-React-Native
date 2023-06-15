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
import {
  faXmark,
  faUserCircle,
  faList,
  faPaperPlane,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-gesture-handler';
import {Comment} from '../../components/Comment';

const defaultText =
  'This is text Description with 4 lines\nThis is text Description with 4 lines\nThis is text Description with 4 lines\nThis is text Description with 4 lines\n';

export const DetailTask = ({route, navigation}) => {
  const [textDesc, setTextDesc] = useState(defaultText);
  const [textCmt, setTextCmt] = useState('');
  const {detail} = route.params;

  return (
    <>
      <View style={[styles.header]}>
        <View style={{borderBottomWidth: 0.5}}>
          <View style={{margin: 15}}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={{width: 30}}>
                <FontAwesomeIcon icon={faXmark} size={25} />
              </TouchableOpacity>
              <Text style={[styles.headerText, {color: '#000'}]}>
                {detail.name}
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
                  <Text style={{color: '#f2f2f2'}}>Members</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
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
          <View style={styles.memberContain}>
            <View style={styles.memberList}>
              <FontAwesomeIcon icon={faUser} style={{marginRight: 10}} />
              {detail.members.length > 0 ? (
                detail.members.map(image => (
                  <Image
                    source={{uri: image}}
                    style={{height: 40, width: 40, borderRadius: 30}}
                  />
                ))
              ) : (
                <Text style={{color: '#262626'}}>Member</Text>
              )}
            </View>
          </View>
          <Comment dataComment={detail.comments} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Image
          source={require('../../asset/avatar.jpg')}
          style={styles.avatar}
        />
        <View style={styles.inputContain}>
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
            value={textCmt}
            onChangeText={text => setTextCmt(text)}
            underlineColorAndroid="transparent"
            placeholder="Add comment"
          />
          <TouchableOpacity disabled={!textCmt.trim()}>
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{padding: 10, margin: 10}}
              color={textCmt.trim() ? '#1a1aff' : '#ccc'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#e6e6e6',
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
  footer: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  inputContain: {
    marginTop: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    marginLeft: 15,
    borderRadius: 20,
    marginBottom: 10,
    borderColor: '#ccc',
  },
  memberContain: {
    marginTop: 15,
    backgroundColor: '#fff',
  },
  memberList: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
});
