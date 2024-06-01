import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import NavBar from "../common/AppNavBar";
export default function FriendList() {
  const [friends, setFriends] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const range = 10;
  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor("#110B1F");
    StatusBar.setBarStyle("light-content");
    loadFriends();
  }, []);
  const loadFriends = () => {
    if (loading || friends.length >= range) return;
    setLoading(true);

    const friendId = Array.from({ length: range }, (_, i) => ({
      id: (friends.length + i + 1).toString(),
      image: require("./../../assets/person.jpg"),
      name: "Vaibhav Patil",
      location: "Sector 8",
    }));

    setFriends(({prevFriends}: {prevFriends: any}) => [...prevFriends, ...friendId]);
    setLoading(false);
  };
  const renderFriend = ({ item }: { item: any }) => (
    <View style={styles.profileContainer}>
      <View style={styles.container1}>
        <Image source={item.image} style={styles.img} />
        <View style={styles.txtContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <TouchableOpacity style={styles.editBtn}>
            <View>
              <Text style={styles.text1}>{item.location}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={renderFriend}
        keyExtractor={(item) => item.id}
        style={{ flex: 1, width: "100%" }}
      />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#110B1F",
    gap: 15,
  },
  container1: {
    height: 90,
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  profileContainer: {
    height: 90,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 70,
  },
  txtContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  editBtn: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },
  text1: {
    fontSize: 14,
    fontWeight: "400",
    color: "#7B7979",
  },
});
