/* eslint-disable-next-line */
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

// Screen Import Location
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

/** env import */
import { firebaseConfig } from './env';

// firebaseのデータベースの使用宣言
require('firebase/firestore');

// firebaseが初期化されていたら、初期化処理を行わない。以下分岐は初期化せれているAPPの数を返却してくれる
if (firebase.apps.length === 0) {
  // firebaseの初期化を行う
  firebase.initializeApp(firebaseConfig);
}
// Stack Navigator
const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a tiner']);

export default function App() {
  return (
    <NavigationContainer>
      {/* eslint-disable-next-line */}
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="MemoList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
            height: 104,
          },
          headerTitleStyle: {
            color: '#FFFFFF',
            lineHeight: 32,
            fontSize: 24,
            fontWeight: 'bold',
          },
          headerTitle: 'SampleMemo',
          headerTintColor: '#FFFFFF',
          headerBackTitle: 'back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen
          name="MemoList"
          component={MemoListScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
