import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import RoomNavigatorBar from "./RoomNavigatorBar";
import NavBar from "../common/AppNavBar";
import { useEffect, useState } from "react";
import JoinRoomModal from "../JoinRoomModal";

export default function Home() {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState("live");
  const [rooms, setRooms] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [openJoinModal, setOpenJoinModal] = useState(false);
  const [range, setRange] = useState(0);

  // useEffect(() => {
  //   setRange(range => 6);
  // })

  useEffect(() => {
    StatusBar.setHidden(false);
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor("#110B1F");
    StatusBar.setBarStyle("light-content");
    loadMoreRooms();
  }, []);

  const loadMoreRooms = () => {
    if (loading || rooms.length >= range) return;
    setLoading(true);

    const newRooms = Array.from({ length: range }, (_, i) => ({
      id: (rooms.length + i + 1).toString(),
      image: require("./../../assets/image1.png"),
      location: "Nigeria Falls",
      roomOwner: "Room Owner",
      participantsCount: 678,
    }));

    setRooms(({ prevRooms }: { prevRooms: any }) => [
      ...prevRooms,
      ...newRooms,
    ]);
    setLoading(false);
  };

  const renderRoom = ({ item }: { item: any }) => (
    <View style={styles.roomContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("InsideRoom")}
        activeOpacity={0.7}
        style={styles.room}
      >
        <Image source={item.image} style={styles.img} />
        <View style={styles.room1}></View>
        <View style={styles.container1}>
          <View style={styles.location}>
            <Text style={styles.text}>{item.location}</Text>
          </View>
          <View style={styles.container2}>
            <View style={styles.person}>
              <Image
                source={require("./../../assets/person.jpg")}
                style={styles.img1}
              />
              <Text style={styles.text1}>{item.roomOwner}</Text>
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
                <Text style={styles.text2}>{item.participantsCount}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <RoomNavigatorBar setHomeTab={setActiveTab} />
      {activeTab == "live" && (
        <FlatList
          data={rooms}
          renderItem={renderRoom}
          keyExtractor={(item) => item.id}
          style={{ flex: 1, width: "100%" }}
        />
      )}
      {activeTab == "join" && (
        <View style={styles.joinRoomContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateRoom")}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Create Room</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setOpenJoinModal(!openJoinModal)}
            style={styles.button1}
          >
            <Text style={styles.buttonText}> Join Room</Text>
          </TouchableOpacity>
          <JoinRoomModal open={openJoinModal} setOpen={setOpenJoinModal} />
        </View>
      )}
      <NavBar />
    </View>
  );
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
    marginTop: 15,
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
  loadingText: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
  },
  joinRoomContainer: {
    width: "100%",
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
});
