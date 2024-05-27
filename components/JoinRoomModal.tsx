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
import { useNavigation } from '@react-navigation/native';

function JoinRoomModal({open, setOpen} : {open:any , setOpen: any}) {
  const Navigation = useNavigation()
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
          <Text style={styles.text}>
            Join Room
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Enter room code"
            placeholderTextColor="#36225F"
            keyboardType="number-pad"
            textAlign="center"
          ></TextInput>

          <TouchableOpacity onPress={() => Navigation.navigate("OnBoarding")}
          style={styles.button2}>
            <Text style={styles.buttonText1}>Join Room</Text>
          </TouchableOpacity>
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
    height: windowHeight * 0.4,
    width: "100%",
    backgroundColor: "#1B1130",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text:{
    color: "white", 
    fontSize: 24,
    fontWeight:'bold',
     top: 10 
  },
  input: {
    color: "white",
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#915DFF",
    height: "20%",
    width: "90%",
    borderRadius: 18,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  button1: {
    width: "50%",
    backgroundColor: "#915DFF",
    height: 64,
    marginTop: 120,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  button2: {
    width: "50%",
    backgroundColor: "#915DFF",
    height: 64,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText1: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default JoinRoomModal;
