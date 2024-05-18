import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  Image,
} from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import RoomNavigatorBar from "./RoomNavigator"
import NavBar from "./AppNavBar"
import { useEffect, useState } from "react"

export default function HomeScreen() {
  const Navigation = useNavigation()
  const [activeTab, setActiveTab] = useState("live")

  useEffect(() => {
    StatusBar.setHidden(false)
    StatusBar.setTranslucent(false)
    StatusBar.setBackgroundColor("#110B1F")
    StatusBar.setBarStyle("light-content")
  })
  return (
    <View style={styles.container}>
      <RoomNavigatorBar setHomeTab={setActiveTab} />
      {activeTab == "live" && (
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <View style={styles.roomContainer}>
            <TouchableOpacity activeOpacity={0.7} style={[styles.room]}>
              <Image
                source={require("./../../assets/image1.png")}
                style={styles.img}
              />
              <View style={styles.room1}></View>
              <View style={styles.container1}>
                <View style={styles.location}>
                  <Text style={styles.text}>Nigeria Falls</Text>
                </View>
                <View style={styles.container2}>
                  <View style={styles.person}>
                    <Image
                      source={require("./../../assets/person.jpg")}
                      style={styles.img1}
                    />

                    <Text style={styles.text1}>Room Owner</Text>
                  </View>
                  <View style={styles.person1}>
                    <Image
                      source={require("./../../assets/person.jpg")}
                      style={styles.img2}
                    />
                    <Image
                      source={require("./../../assets/person.jpg")}
                      style={styles.img2}
                    />
                    <Image
                      source={require("./../../assets/person.jpg")}
                      style={styles.img2}
                    />

                    <View style={styles.count}>
                      <Text style={styles.text2}>678</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
      {activeTab == "join" && <></>}
      <NavBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110B1F",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 142,
    borderRadius: 18,
    position: "absolute",
  },
  img1: {
    resizeMode: "cover",
    width: 34,
    height: 34,
    borderRadius: 18,
    borderColor: "#915DFF",
    borderWidth: 1,
  },
  img2: {
    width: 25,
    height: 25,
    borderRadius: 18,
    borderColor: "#915DFF",
    borderWidth: 1,
  },
  roomContainer: {
    width: "100%",
    height: 142,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  room: {
    width: "90%",
    height: 142,
    backgroundColor: "#d6d6d6",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  room1: {
    width: "100%",
    height: 142,
    backgroundColor: "#915DFF45",
    position: "absolute",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    width: "90%",
    height: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    width: "100%",
  },
  container2: {
    width: "100%",
    height: 34,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  person: {
    width: "auto",
    height: 34,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  person1: {
    width: "auto",
    height: 34,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
 
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  text2: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },

  count: {
    backgroundColor: "#915DFF60",
    borderRadius: 18,
    width: 40,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
})
