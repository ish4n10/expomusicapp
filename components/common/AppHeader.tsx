import React, { useEffect } from "react";
import { View, Text, StyleSheet} from "react-native";
import { windowHeight, windowWidth } from "./Dimension";
import { useNavigation } from "@react-navigation/native";
export default function AppHeader() {
    const navigation = useNavigation<any>();
    const headerName = navigation.getState()?.routes[navigation.getState()?.index].name;
    // useEffect(() => {
    // })
    return(
        <View style={styles.header}>
        <Text style={styles.headerText}>{headerName}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        height: windowHeight*0.06,
        width: windowWidth,
        backgroundColor: '#1B1130',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        color: '#915DFF',
    },
})