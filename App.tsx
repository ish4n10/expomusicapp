

import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import CreateRoom from './components/CreateRoom';
import Home from './components/home/Home';
import OnBoarding from './components/OnBoarding';
import OnBoarding1 from './components/OnBoarding1';
import FriendList from './components/home/FriendList';
import JoinRoomModal from './components/JoinRoomModal';
import Signup from './components/Signup';
import Profile from './components/home/Profile';
import { StatusBar } from 'react-native';
import AppHeader from './components/common/AppHeader';
import InsideRoomScreen from './components/InsideRoom';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    StatusBar.setBarStyle('light-content');
  })
  return (
    
  <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
        animation: 'slide_from_right',
        header: () => <AppHeader />
      }}
      initialRouteName="Onboarding">
      <Stack.Screen
        name="OnBoarding"
        options={{
          headerShown: false
        }}
        component={OnBoarding}
      />
      <Stack.Screen
        name="OnBoarding1"
        options={{
          headerShown: false
        }}
        component={OnBoarding1}
      />
      <Stack.Screen
        name="Signup"
        options={{
          headerShown: false
        }}
        component={Signup}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="FriendList"
        component={FriendList}
      />
      <Stack.Screen
        name="JoinRoom"
        component={JoinRoomModal}
      />
      <Stack.Screen
        name="CreateRoom"
        component={CreateRoom}
      />
      <Stack.Screen
        name="InsideRoom"
        options={{
          headerShown: false
        }}
        component={InsideRoomScreen}
      />
    </Stack.Navigator>

  </NavigationContainer>
 
  );
}

