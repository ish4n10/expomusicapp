import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import OnBoardingScreen from './components/OnBoarding';
import OnBoardingScreen1 from './components/OnBoarding1';


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
        </Stack.Navigator>
  </NavigationContainer>
  );
}

