import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function InsideRoomScreen() {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

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
    <View style={styles.container}>
      <MapView
        style={styles.map}
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
      </MapView>
    </View>
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
        width: "100%",
        height: "100%",
      },
      loadingText: {
        fontSize: 18,
        color: "#333",
      },
      errorText: {
        fontSize: 18,
        color: "red",
      },
})
