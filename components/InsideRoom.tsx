import React, { useEffect, useState } from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPhone,
  faMessage,
  faHeadphonesSimple,
} from "@fortawesome/free-solid-svg-icons";
import MapView, { Marker, Polyline, MapViewProps, PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import SlidingPanel from "./SlidingPanel";
import { GestureHandlerRootView } from "react-native-gesture-handler";


let MapViewMob, MarkerMob, MapViewDirectionsMob;

if (Platform.OS === "android" || Platform.OS === "ios") {
  MapViewMob = require("react-native-maps").default;
  MarkerMob = require("react-native-maps").Marker;
  MapViewDirectionsMob = require("react-native-maps-directions").default;
}




export default function InsideRoomScreen() {
  const navigation = useNavigation<any>();
  const [location, setLocation] = useState<any>();
  const [errorMsg, setErrorMsg] = useState<any>();
  const [routeCoordinates, setRouteCoordinates] = useState<any>([]);
  const [destination] = useState<any>({
    latitude: 22.03242,
    longitude: 82.644527,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log(location);

        const coords = [
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          },
          { latitude: destination.latitude, longitude: destination.longitude },
        ];

        setRouteCoordinates(coords);
      })();
    }, 2000);
    return () => clearInterval(interval);
  });

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{errorMsg}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Your Location"}
            description={"You are here"}
          />
          <Marker
            coordinate={destination}
            title={"Destination"}
            description={"Hardcoded Destination"}
            pinColor="blue"
          />
         <MapViewDirectionsMob
                  origin={location}
                  destination={destination}
                  strokeColor={"red"}
                  tappable={true}
                  apikey={""}
                  strokeWidth={14}
                />
          {/* <MapViewDirections
            origin={location}
            destination={destination}
            apikey="AIzaSyCMgzNknCnEG0oL8UBhSMCyOl6DjzyHVgM" // insert your API Key here
            strokeWidth={4}
            strokeColor="#000"
          /> */}
        </MapView>
        <View style={styles.container1}>
          <View style={styles.icon}>
            <TouchableOpacity style={styles.circle}>
              <FontAwesomeIcon icon={faPhone} size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <FontAwesomeIcon icon={faMessage} size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.circle}>
              <FontAwesomeIcon
                icon={faHeadphonesSimple}
                size={25}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
        <SlidingPanel />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    // height: windowHeight,
    // width: windowWidth,
  },
  loadingText: {
    fontSize: 18,
    color: "#333",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  container1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  icon: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "25%",
    height: "35%",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#915DFF",
    width: 60,
    height: 60,
    borderRadius: 60,
  },
});
