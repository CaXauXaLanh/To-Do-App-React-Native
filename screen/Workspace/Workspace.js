import React, {useState} from 'react';

import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Column} from './Column';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export const Workspace = ({navigation, route}) => {
  const mockData = [
    {
      id: '1',
      name: 'TO DO',
      rows: [
        {
          id: '11',
          name: 'Taxi Driver',
          description:
            'This is description\nThis is description\nThis is description\nThis is description\n',
          members: [
            'https://i.pinimg.com/736x/59/18/d8/5918d8e9040516b65f93c75a9c5b8175.jpg',
            'https://thuthuatnhanh.com/wp-content/uploads/2021/02/Anh-avatar-bua-cute-dep-390x390.jpg',
          ],
          comments: [
            {
              name: 'Hoàng Thanh Tùng',
              image:
                'https://thuthuatnhanh.com/wp-content/uploads/2021/02/Anh-avatar-bua-cute-dep-390x390.jpg',
              text: 'this task is so hard, pls help me',
            },
            {
              name: 'Nguyễn Kim Quân',
              image:
                'https://i.pinimg.com/736x/59/18/d8/5918d8e9040516b65f93c75a9c5b8175.jpg',
              text: 'no, do it yourself',
            },
          ],
        },
        {
          id: '12',
          name: 'Luxury Perfume',
          description:
            'This is description\nThis is description\nThis is description\nThis is description\n',
          members: [
            'https://antimatter.vn/wp-content/uploads/2022/12/anh-avatar-facebook-vo-danh-avt-fb-cho-nu-1.jpg',
            'https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg',
          ],
          comments: [
            {
              name: 'Hoàng Thanh Tùng',
              image:
                'https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg',
              text: 'this is so cool, why you dont go live on Youtube',
            },
            {
              name: 'Trần Đức Minh',
              image:
                'https://antimatter.vn/wp-content/uploads/2022/12/anh-avatar-facebook-vo-danh-avt-fb-cho-nu-1.jpg',
              text: 'so stupid',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'DOING',
      rows: [
        {
          id: '21',
          name: 'Add custom date options',
          description:
            'This is description\nThis is description\nThis is description\nThis is description\n',
          members: [
            'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/anh-avatar-facebook-ngau-hot-nhat-hien-nay.jpg',
            'https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg',
          ],
          comments: [
            {
              name: 'Nguyễn Văn Luật',
              image:
                'https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg',
              text: 'this is so cool, why you dont go live on Youtube',
            },
            {
              name: 'Nguyễn Kim Quân',
              image:
                'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/anh-avatar-facebook-ngau-hot-nhat-hien-nay.jpg',
              text: 'omg thank iu',
            },
          ],
        },
        {
          id: '22',
          name: 'Fix bug display',
          description:
            'This is description\nThis is description\nThis is description\nThis is description\n',
          members: [
            'https://antimatter.vn/wp-content/uploads/2022/12/anh-avatar-facebook-vo-danh-avt-fb-cho-nu-1.jpg',
            'https://anhdep123.com/wp-content/uploads/2021/02/anh-avatar-hai-huoc.jpg',
          ],
          comments: [
            {
              name: 'Trần Đức Minh',
              image:
                'https://anhdep123.com/wp-content/uploads/2021/02/anh-avatar-hai-huoc.jpg',
              text: 'wow you so smart',
            },
            {
              name: 'Nguyễn Văn Luật',
              image:
                'https://antimatter.vn/wp-content/uploads/2022/12/anh-avatar-facebook-vo-danh-avt-fb-cho-nu-1.jpg',
              text: 'haha dont make me laugh',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: 'DONE',
      rows: [
        {
          id: '31',
          name: 'Bug network',
          description:
            'This is description\nThis is description\nThis is description\nThis is description\n',
          members: [
            'https://antimatter.vn/wp-content/uploads/2022/12/hinh-anh-avatar-facebook-1.jpg',
            'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-facebook-nu-dep-doc.jpg',
            'https://anhdep123.com/wp-content/uploads/2021/02/anh-avatar-hai-huoc.jpg',
          ],
          comments: [
            {
              name: 'Trần Quang Khánh',
              image:
                'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-facebook-nu-dep-doc.jpg',
              text: 'pls let me more time, this task so hard',
            },
            {
              name: 'Nguyễn Văn Luật',
              image:
                'https://anhdep123.com/wp-content/uploads/2021/02/anh-avatar-hai-huoc.jpg',
              text: 'ok but 50% salary',
            },
          ],
        },
      ],
    },
  ];
  const {image} = route.params;

  return (
    <ImageBackground source={{uri: image}} style={styles.workspaceContainer}>
      <View style={{paddingTop: 10}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {mockData.map(data => (
            <Column data={data} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => {
          console.log('haha');
        }}
        style={styles.roundButton}>
        <FontAwesomeIcon icon={faPlus} color={'#fff'} size={20} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: 'column',
    backgroundColor: 'blue',
  },
  item: {
    backgroundColor: 'blue',
    borderStyle: 'solid',
    width: '50%', // is 50% of container width
  },
  workspaceContainer: {
    flex: 1,
  },
  roundButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 10,
    bottom: 15,
    padding: 15,
    borderRadius: 100,
    backgroundColor: '#007500',
  },
});
