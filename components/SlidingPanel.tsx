import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions ,Image} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faMessage, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';


const { height } = Dimensions.get('window');
export default function SlidingPanel() {
  const translateY = useSharedValue(height * 0.7);

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
        translateY.value = withSpring(height * 0.2);
      } else {
        translateY.value = withSpring(height * 0.7);
      }
    },
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[styles.panel, animatedStyle]}>
        <View style={styles.panelHeader}>
          <Text style={styles.panelHandle}>───</Text>
          <Text style ={styles.text}>Add Friends</Text>
        </View>
        <View style={styles.panelContent}>
          <View style = {styles.circle}></View>
           <View><Text style ={styles.text}>Vaibhav Patil</Text></View>
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
  },
  panelHandle: {
    fontSize: 20,
    color: '#fff',
    
  },
  text:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
  },
  panelContent: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B113085',
    flexDirection:'row',
  },
  circle:{
    width:60,
    height:60,
    borderRadius:100,
    backgroundColor:'#d7d7d7',
  },
 
});
