
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
      <Stack.Navigator initialRouteName="onBoarding">
        <Stack.Screen
          name="onBoarding"
          options={{
            headerShown: false,
          }}
          component={OnBoardingScreen}
        />
}