import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import RoomNavigatorBar from './RoomNavigator';

export default function HomeScreen(){
    const Navigation = useNavigation()
    return(
        <View style = {styles.container}>
           <RoomNavigatorBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#110B1F",
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    }
})