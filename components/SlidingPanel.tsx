import React ,{useEffect,useState}from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions ,Image} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';


const { height } = Dimensions.get('window');
export default function SlidingPanel() {
  const translateY = useSharedValue(height * 0.8);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      if (event.translationY < 0) {
        translateY.value = withSpring(height * 0.4);
      } else {
        translateY.value = withSpring(height * 0.8);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.panel, animatedStyle]}>
        <View style={styles.panelHeader}>
          <View style = {styles.panelHandle}></View>
          <Text style ={styles.text}>All Friends</Text>
        </View>
        <View style={styles.panelContent}>
          <View style ={styles.container1}>
          <View style ={styles.container}>
            <View style = {styles.circle}></View>
           <View><Text style ={styles.text1}>Vaibhav Patil</Text></View>
           </View>
           
           <View style = {styles.btnContainer}>
           <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add Friend</Text>
            <FontAwesomeIcon
            icon={faUserPlus}
            size={22}
            color='#fff'
          />
          </TouchableOpacity>
          </View>
        </View>
        </View>
      </Animated.View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height,
    backgroundColor: '#1B113085',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#1B113085',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    
  },
  
  panelHeader: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1B113085',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    gap:10,
  },
  panelHandle: {
    backgroundColor:'#fff',
    height:4,
    width:60,
    borderRadius:20,
  },
  text:{
    color:'#fff',
    fontSize:24,
    fontWeight:'bold',
  },
  panelContent: {
    padding: 20,
    backgroundColor: '#1B113085',
    height:height,
  },
  container1:{
    justifyContent:'space-between',
    height:height*0.47,
  },
  container:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    gap:10,
  },
  circle:{
    width:40,
    height:40,
    borderRadius:100,
    backgroundColor:'#d7d7d7',
  },
  text1:{
    color:'#fff',
    fontSize:20,
    fontWeight:'600',
  },
  btnContainer:{
   
    justifyContent:'center',
    alignItems:'center',
  },
  button: {
    width:'60%',
    backgroundColor: "#915DFF",
    height: 64,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row',
    gap:10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
