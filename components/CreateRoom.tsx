import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TextInput,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import JoinRoomModal from "./JoinRoomModal";

import RadioForm from "react-native-simple-radio-button";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import JoinRoom from "./JoinRoomModal";
import Modal from "react-native-modal";
import { windowHeight } from "./common/Dimension";

function CreateRoom() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  const [activeIndex, setActiveIndex] = useState(0);
  const flatlistRef = useRef();
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  });

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === imgData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const imgData = [
    {
      id: "01",
      image: require("../assets/crImg1.png"),
    },
    {
      id: "02",
      image: require("../assets/crImg2.png"),
    },
    {
      id: "03",
      image: require("../assets/crImg3.png"),
    },
  ];
  const items = [
    { label: "Private", value: 0 },
    { label: "Public", value: 1 },
  ];

  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index: index,
  });

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ width: "auto", margin: "auto" }}>
        <Image
          source={item.image}
          style={{
            top: 40,
            height: 220,
            width: screenWidth,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: "#915DFF",
            resizeMode: "contain",
          }}
        />
      </View>
    );
  };

  const dotIndicators = () => {
    return imgData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            style={{
              backgroundColor: "#CB5DFF",
              height: 15,
              width: 15,
              borderRadius: 10,
              bottom: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "#915DFF",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      }
    });
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPos = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPos / screenWidth);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <Text style={styles.headline}>Choose cover image</Text>
      </SafeAreaView>
      <View>
        <FlatList
          data={imgData}
          ref={flatlistRef}
          getItemLayout={getItemLayout}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          pagingEnabled={true}
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.dots}>{dotIndicators()}</View>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.priText}>Privacy</Text>
        <View style={styles.leftSide}>
          <RadioForm
            radio_props={items}
            initial={value}
            onPress={(value) => setValue(value)}
            labelColor="white"
            selectedLabelColor="white"
            buttonColor="#915DFF"
            selectedButtonColor="#915DFF"
          />
        </View>

        <View style={styles.rightSide}>
          <Text style={styles.rightTxt}>Only invitations</Text>
          <Text style={styles.rightTxt}>Anyone can Join!</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button]}
          onPress={() => setOpen(!open)}
        >
          <Text style={styles.buttonText}> Create Room </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#110B1F",
    flex: 1,
  },
  headline: {
    fontSize: 20,
    color: "white",
  },
  subContainer: {
    top: 20,
    left: 10,
  },
  dots: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
    gap: 10,
  },
  bottomContainer: {
    top: 10,
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  leftSide: {
    marginBottom: 40,
    right: 30,
    paddingVertical: 1,
    top: 70,
  },
  rightSide: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    top: 60,
    gap: 10,
  },
  rightTxt: {
    color: "#915DFF", //#36225F
    fontSize: 15,
    top: 20,
    gap: 5,
    fontWeight: "200",
  },
  priText: {
    color: "white",
    fontSize: 20,
    top: 10,
    left: 15,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 150,
    flex: 1,
  },
  button: {
    width: "60%",
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
export default CreateRoom;
