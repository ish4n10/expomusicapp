import { StatusBar, StyleSheet, Text, TouchableOpacity, View,Dimensions } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import RoomNavigatorBar from './RoomNavigator';
import NavBar from './AppNavBar';
import { useEffect } from 'react';

export default function HomeScreen(){
    const Navigation = useNavigation();
    
    useEffect(()=>{
        StatusBar.setHidden(false)
        StatusBar.setTranslucent(false)
        StatusBar.setBackgroundColor('#110B1F')
        StatusBar.setBarStyle('light-content')
    })
    return(
        <View style = {styles.container}>
           <RoomNavigatorBar/>
           
           <NavBar/>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#110B1F",
       flex:1,
        justifyContent:'space-between',
        alignItems:'center',
    }
})