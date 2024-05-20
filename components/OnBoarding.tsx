import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Svg1 from "./svg/Svg1";
 
export default function OnBoardingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.svgContainer}>
        <Svg1 />
      </View>
      <View style={styles.Container}>
        <View style={styles.textContainer}>
          <View style={styles.textContainer1}>
            <Text style={styles.text1}>Welcome to Music App!</Text>
            <Text style={styles.text2}>
              {`Locate your friends, strike up a conversation, and let the music
              unite everyone.`}
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {navigation.navigate("OnBoarding1")}}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: "#000",
  },
  mainContainer: {
    backgroundColor: "#110B1F",
    justifyContent: "center",
    height: "100%",
  },
  svgContainer: {
    width: "100%",
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  Container: {
    height: "35%",
    justifyContent: "center",
  },
  textContainer: {
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer1: {
    height: "70%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  text2: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "condensed",
    color: "#D0CECE",
    marginTop: 20,
  },
  buttonContainer: {
    height: "50%",
    backgroundColor: "#110B1F",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    backgroundColor: "#915DFF",
    height: 64,
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
