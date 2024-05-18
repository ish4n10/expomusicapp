import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

function JoinRoom() {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      isVisible={open}
      onBackButtonPress={() => setOpen(!open)}
      onBackdropPress={() => setOpen(!open)}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter room code"
        ></TextInput>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Join Room</Text>
      </TouchableOpacity>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {},
  button: {
    width: "80%",
    backgroundColor: "#915DFF",
    height: 64,
    marginTop: 120,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default JoinRoom;
