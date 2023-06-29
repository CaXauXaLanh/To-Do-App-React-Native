import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  LogBox,
  Button,
} from 'react-native';
import apiInstance from '../../constants/apiInstance';
import {AuthContext} from '../../context/AuthContext';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const colorValue = [
  {
    label: 'flare',
    value: require('../../asset/colorBackground/flare.jpg'),
  },
  {
    label: 'cool-blues',
    value: require('../../asset/colorBackground/cool-blues.jpg'),
  },
  {
    label: 'dark-ocean',
    value: require('../../asset/colorBackground/dark-ocean.jpg'),
  },
  {
    label: 'quepal',
    value: require('../../asset/colorBackground/quepal.jpg'),
  },
  {
    label: 'vanusa',
    value: require('../../asset/colorBackground/vanusa.jpg'),
  },
];
export const CreateBoard = ({navigation, route}) => {
  const [color, setColor] = useState(
    require('../../asset/colorBackground/cool-blues.jpg'),
  );
  const [boardName, setBoardName] = useState('');
  const {loading, setLoading, handleReload} = route.params;
  const {userInfo} = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const resp = await apiInstance.post('/project/create', {
        name: boardName,
        img: color,
        employeeId: userInfo.id,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = value => setBoardName(value);

  return (
    <View styles={styles.container}>
      <View style={{margin: 15}}>
        <View style={styles.boardNameInput}>
          <Text style={{fontSize: 14, color: '#3F51B5'}}>Board name</Text>
          <TextInput
            editable
            value={boardName}
            onChangeText={handleChange}
            style={{
              borderBottomWidth: 2,
              textAlignVertical: 'bottom',
              marginTop: -15,
              borderColor: '#0d98d9',
            }}
          />
        </View>
        <TouchableOpacity
          underlayColor={'#CCC'}
          onPress={() =>
            navigation.navigate('Choose color', {
              colors: colorValue,
              setColor: setColor,
            })
          }>
          <View style={styles.colorContain}>
            <Text style={{fontSize: 16, color: 'black'}}>Board background</Text>
            <Image
              style={{height: 35, width: 35, borderRadius: 5}}
              source={color}
            />
          </View>
        </TouchableOpacity>

        <View style={{marginTop: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: boardName.trim() ? '#0d98d9' : '#CCC',
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              borderRadius: 5,
            }}
            disabled={!boardName.trim() || loading}
            onPress={() => {
              handleSubmit();
              // navigation.goBack();
              // handleReload();
            }}>
            <Text
              style={{fontWeight: 500, color: boardName.trim() ? '#fff' : ''}}>
              CREATE BOARD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boardNameInput: {
    backgroundColor: '#e6e6e6',
    padding: 10,
  },
  colorContain: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
