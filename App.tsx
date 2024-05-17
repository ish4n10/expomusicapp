import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import OnBoardingScreen from './components/OnBoarding';
import OnBoardingScreen1 from './components/OnBoarding1';
import HomeScreen from './components/home/Home';


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
        <Stack.Screen
        name="onBoarding1"
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
        </Stack.Navigator>
  </NavigationContainer>
  );
}

