import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import OnBoardingScreen from './components/OnBoarding';
import OnBoardingScreen1 from './components/OnBoarding1';
import HomeScreen from './components/home/Home';
import ProfileScreen from './components/home/Profile';
import FriendsScreen from './components/home/Friends';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
     <Stack.Navigator 
     screenOptions={{
      animation: 'slide_from_right'
     }}
     initialRouteName="onBoarding">
     <Stack.Screen
          name="OnBoarding"
          options={{
            headerShown: false,
          }}
          component={OnBoardingScreen}
        />
        <Stack.Screen
        name="OnBoarding1"
        options={{
          headerShown: false,
        }}
        component={OnBoardingScreen1}
      />
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name="friends"
        options={{
          headerShown: false,
        }}
        component={FriendsScreen}
      />
        </Stack.Navigator>
  </NavigationContainer>
  );
}

