import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import { windowHeight } from "./common/Dimension";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { text } from '@fortawesome/fontawesome-svg-core';
import { RootStackParamList } from "./types/navigation";

function LogoutModal({open, setOpen} : {open:any , setOpen: any}) {
  const navigation = useNavigation<any>();
  const [color, setColor] = useState<boolean>(true);
  return (
    <Modal
        isVisible={open}
        onBackButtonPress={() => setOpen(!open)}
        onBackdropPress={() => setOpen(!open)}
        animationInTiming={0}
        animationIn={"bounceInLeft"}
        animationOut={"bounceOutRight"}
        backdropTransitionInTiming={0}
        style={styles.modalCon}
      >
        <View style={styles.container1}>
            <View style = {styles.txtContainer}> 
            <Text style={styles.text}>
            Log Out
          </Text>
          <Text style={{ color: "white", fontSize: 18, top: 10 }}>
            Are you sure you want to log out ?
          </Text>
          </View>
          <View style ={styles.btnContainer}>
          <TouchableOpacity onPress={() => setOpen(!open)}
          style={styles.button1}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("OnBoarding")}
          style={styles.button2}>
            <Text style={styles.buttonText1}>Log Out</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
}
const styles = StyleSheet.create({
  modalCon: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },

  container1: {
    justifyContent: "space-around",
    alignItems: "center",
    height: windowHeight * 0.3,
    width: "100%",
    backgroundColor: "#1B1130",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  txtContainer:{
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    gap:15,
  },
  text:{
    color: "white",
    fontSize: 24,
    fontWeight:'bold',
    top: 10
  },
  text1:{
    color: "#7B7979",
    fontSize: 18,
    top: 10
  },
  btnContainer:{
    flexDirection:'row',
    gap:15,
  },
  button1: {
    width: "40%",
    backgroundColor: "#1B1130",
    height: 62,
    borderRadius: 18,
    borderColor:'#915DFF',
    borderWidth:2,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: "40%",
    backgroundColor: "#915DFF",
    height: 62,
    borderRadius: 18,
    borderColor:'#915DFF',
    borderWidth:2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#915DFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText1: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default LogoutModal;
