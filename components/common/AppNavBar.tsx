import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHome,faUserGroup,faUser } from "@fortawesome/free-solid-svg-icons"


export default function AppNavBar() {
  const navigation = useNavigation<any>()
  console.log(navigation.getState())
  const [activeButton, setActiveButton] = useState("home");

  return (
    <View style={styles.navContainer}>
      <View style={styles.navBar}>
        <TouchableOpacity
          onPress={() => {
            setActiveButton("Home");
            navigation.navigate("Home");
          }}
          style={styles.button}
        >
          <FontAwesomeIcon
            icon={faHome}
            size={24}
            color={activeButton === "home" ? "#915DFF" : "#36225F"}
          />
          <Text
            style={[
              styles.text,
              { color: activeButton === "home" ? "#915DFF" : "#36225F" },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
d
        <TouchableOpacity
          onPress={() => {
            setActiveButton("Friends");
            navigation.navigate("FriendList");
          }}
          style={styles.button}
        >
          <FontAwesomeIcon
            icon={faUserGroup}
            size={24}
            color={activeButton === "Friends" ? "#915DFF" : "#36225F"}
          />
          <Text
            style={[
              styles.text,
              { color: activeButton === "Friends" ? "#915DFF" : "#36225F" },
            ]}
          >
            Friends
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveButton("Profile")
            navigation.navigate("Profile")
          }}
          style={styles.button}
        >
          <FontAwesomeIcon
            icon={faUser}
            size={24}
            color={activeButton === "Profile" ? "#915DFF" : "#36225F"}
          />
          <Text
            style={[
              styles.text,
              { color: activeButton === "Profile" ? "#915DFF" : "#36225F" },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#1B1130",
  },
  navBar: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    height: 70,
    
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 77,
    height: 70,
    
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
})
