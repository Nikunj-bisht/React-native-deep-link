import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Button, Image} from 'react-native';
import NativeUi from './nativeUi';
import Insta from './insta';
import ImgDet from './imgDet';
import Reels from '../components/insta/reels';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeFeed from '../components/homeFeeds';
import { Search } from './search';
interface Iprops {
  navigation: any;
}
const Tab = createBottomTabNavigator();
function Home(props: Iprops) {
  const {navigation} = props;
  function nativesc() {
    navigation.navigate('nativeui');
  }

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Tab.Navigator screenOptions={{lazy: true}}>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: props => <Icon style={{}} size={20} name="home" />,
            headerShown: false,
          }}
          name="nativeui">
          {props => <HomeFeed />}
        </Tab.Screen>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: props => <Icon size={20} name="search" />,
            headerShown: false,
          }}
          name="reels">
          {props => <Search/>}
        </Tab.Screen>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: props => <Icon size={20} name="plus-square-o" />,
            headerShown: false,
          }}
          name="reels3">
          {props => <></>}
        </Tab.Screen>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: props => <Icon size={20} name="video-camera" />,
            headerShown: false,
          }}
          name="reels2">
          {props => <Reels />}
        </Tab.Screen>
        <Tab.Screen
          options={{
            tabBarLabel: '',
            tabBarIcon: props => (
              <Image
                style={{width: 30, height: 30, borderRadius: 50}}
                source={{
                  uri: 'https://instagram.fdel57-1.fna.fbcdn.net/v/t51.2885-19/397349613_346279128075736_6088170981125175851_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel57-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ptTsSFXHjl8AX8BMLoJ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDPqhkAI0sBI2S8OCHNFBuwGUkN4X7JR0bxJoEyTWWqyA&oe=65660FA7&_nc_sid=8b3546',
                }}></Image>
            ),
            headerShown: false,
          }}
          name="reels1">
          {props => <Insta />}
        </Tab.Screen>
      </Tab.Navigator>
      {/* <Button title="Native" onPress={nativesc.bind({})}></Button> */}
      {/* <Button
        title="Insta"
        onPress={() => navigation.navigate('insta')}></Button>
        <Button
        title="reels"
        onPress={() => navigation.navigate('reels')}></Button> */}
    </View>
  );
}

export default Home;
