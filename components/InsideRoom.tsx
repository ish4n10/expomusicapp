import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPhone,faMessage,faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
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
      <View style = {styles.container1}> 
      <View style = {styles.icon}> 
      <TouchableOpacity style = {styles.circle}> 
      <FontAwesomeIcon
            icon={faPhone}
            size={25}
            color='#fff'
          />
      </TouchableOpacity>
      <TouchableOpacity style = {styles.circle}> 
      <FontAwesomeIcon
            icon={faMessage}
            size={25}
            color='#fff'
          />
      </TouchableOpacity>
      <TouchableOpacity style = {styles.circle}> 
      <FontAwesomeIcon
            icon={faHeadphonesSimple}
            size={25}
            color='#fff'
          />
      </TouchableOpacity>
      </View>
      </View>
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
      container1:{
        width:'100%',
        height:'100%',
        position:'absolute',
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },
      icon:{
        justifyContent: "space-evenly",
        alignItems: "center",
        width:'25%',
        height:'35%',
       
      },
      circle:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#915DFF",
        width:60,
        height:60,
        borderRadius:60,
      }
})
