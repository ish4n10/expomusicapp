import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import Svg2 from './svg/Svg2';
import Svg1 from "./svg/Svg1";

export default function OnBoardingScreen1(){
    const Navigation = useNavigation();
    return(
        <View style = {styles.mainContainer}>

            <View style = {styles.svgContainer}>
            <Svg1/>
            </View>
            <View style ={styles.Container}>
            <View style = {styles.textContainer}>
                <View style = {styles.textContainer1}>
               
            </View>
            </View>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity style ={[styles.button]}>
                   
                <Text style ={styles.buttonText}> Get Started</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Text:{
        color:"#000",
    },
    mainContainer:{
        backgroundColor:"#110B1F",
        justifyContent:'center',
        height:"100%",
    },
    svgContainer:{
        width:"100%",
        height:"65%",
        justifyContent:'center',
        alignItems:'center',
    },
    Container:{
           
            height:'35%',
            justifyContent:'center',
    },
    textContainer:{
       
        height:'60%',
        justifyContent:'center',
        alignItems:'center',

    },
    textContainer1:{
      
        height:'70%',
        width:'80%',
        justifyContent:'center',
        alignItems:'center',

    },
    text1:{
        textAlign:'center',
        fontSize:28,
        fontWeight:'bold',
        color:'#fff',
    },
    text2:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'condensed',
        color:'#D0CECE',
        marginTop:20,
    },
    buttonContainer:{
        height:'50%',
        backgroundColor:'#110B1F',
        justifyContent:'center',
        alignItems:'center',
    },
    button:{
        width:'80%',
        backgroundColor:'#915DFF',
        height:64,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    },
});