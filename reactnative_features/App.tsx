/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NativeUi from './src/screens/nativeUi';
import Home from './src/screens/home';
import Insta from './src/screens/insta';
import ImgDet from './src/screens/imgDet';
import Reels from './src/components/insta/reels';
import {TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{}}>
          <Stack.Screen options={{headerShown: false}} name="home">
            {props => <Home {...props} />}
          </Stack.Screen>

          <Stack.Screen name="nativeui">{props => <NativeUi />}</Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
              headerStyle: {backgroundColor: 'white'},
            }}
            name="insta">
            {props => <Insta />}
          </Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
              headerStyle: {backgroundColor: 'white'},
              ...TransitionPresets.ScaleFromCenterAndroid,
            }}
            name="imgdet">
            {props => <ImgDet {...props} />}
          </Stack.Screen>
          <Stack.Screen
            options={{
              headerShown: false,
              headerStyle: {backgroundColor: 'white'},
            }}
            name="reels">
            {props => <Reels />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
