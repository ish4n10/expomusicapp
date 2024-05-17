import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState } from "react"

export default function RoomNavigatorBar() {
  const Navigation = useNavigation()
  const [color, setColor] = useState(false)
  return (
    <View style={styles.topBarContainer}>
      <View style = {styles.topBar}>
        
        <TouchableOpacity onPress={()=>setColor(!color)}
        // style ={{backgroundColor:color?'#915DFF':'#1B1130',
        style = {[styles.button,{backgroundColor:color?'#915DFF':'#1B1130'}]}
            
          >
          <Text style = {styles.text}>Live Room</Text>
        </TouchableOpacity>
        
    
        <TouchableOpacity onPress={()=>setColor(!color)}
        style = {[styles.button,{backgroundColor:!color?'#915DFF':'#1B1130'}]} >
          <Text style = {styles.text}>Create/Join </Text>
        </TouchableOpacity>
        </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  topBarContainer: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  
    
  },
  topBar:{
    width:'80%',
    backgroundColor:'#1B1130',
    height:50,
    borderRadius:12, 
    flexDirection:'row', 
},
  text:{
    color:'#fff',
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    height:50,
    borderRadius:12,
  },
})
