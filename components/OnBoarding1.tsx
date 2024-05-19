import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import Svg2 from './svg/Svg2';
import Svg1 from "./svg/Svg1"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function OnBoardingScreen1() {
  const Navigation = useNavigation()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.svgContainer}>
        <Svg1 />
      </View>
      <View style={styles.Container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => Navigation.navigate("home")}
            style={[styles.button]}
          >
            <Text style={styles.buttonText}> Continue via Google</Text>
            <FontAwesomeIcon
            icon={faGoogle}
            size={22}
            color='#fff'
          />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Navigation.navigate("home")}
            style={[styles.button]}
          >
            <Text style={styles.buttonText}> Continue via Facebook</Text>
            <FontAwesomeIcon
            icon={faFacebook}
            size={22}
            color='#fff'
          />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.text1}>Don't have an account? </Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => Navigation.navigate("home")}>
              <Text style={styles.text2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
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
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  text1: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "condensed",
    color: "#fff",
  },
  text2: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#915DFF",
  },

  buttonContainer: {
    height: "60%",
    width: "100%",
    backgroundColor: "#110B1F",
    justifyContent: "center",
    alignItems: "center",
    gap:30,
  },
  button: {
    width: "80%",
    backgroundColor: "#915DFF",
    height: 64,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'row',
    gap:10,
  },
  button1: {
    width: "80%",
    backgroundColor: "#915DFF",
    height: 64,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomContainer: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
})
