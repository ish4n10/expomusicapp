import React ,{ useEffect, useState }from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen,faGear,faChevronRight,faCircleQuestion,faLock ,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../common/AppNavBar"
import LogoutModal from '../LogoutModal'
export default function Profile() {
  const navigation = useNavigation<any>();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style ={styles.wrap}>
      <View style={styles.profileContainer}>
        <Image
          source={require("./../../assets/person.jpg")}
          style={styles.img}
        />
        <View style={styles.txtContainer}>
          <Text style={styles.text}>Vaibhav Patil</Text>
          <TouchableOpacity style={styles.editBtn}>
            <View>
              <Text style={styles.text1}>Edit Profile</Text>
            </View>

            <FontAwesomeIcon icon={faPen} size={14} color="#915DFF" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <FontAwesomeIcon icon={faGear} 
            size={18}
             color="#fff" />
            <Text style={styles.text2}>Settings</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faChevronRight} 
            size={12} 
            color="#7B7979" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <FontAwesomeIcon icon={faCircleQuestion} 
            size={18}
             color="#fff" />
            <Text style={styles.text2}>Help</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faChevronRight} 
            size={12} 
            color="#7B7979" />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionContainer}>
          <View style={styles.option}>
            <FontAwesomeIcon icon={faLock} 
            size={18}
             color="#fff" />
            <Text style={styles.text2}>Privacy and Friends</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faChevronRight} 
            size={12} 
            color="#7B7979" />
            </View>
        </TouchableOpacity>

      </View>
      <View style ={styles.container2}>
      <TouchableOpacity 
       onPress={() => setOpenLogoutModal(!openLogoutModal)}
        style={[styles.optionContainer1]}>
          <View style={styles.option}>
            <FontAwesomeIcon icon={faRightFromBracket} 
            size={18}
             color="#fff" />
            <Text style={styles.text2}>Logout</Text>
          </View>
          <View>
            <FontAwesomeIcon icon={faChevronRight} 
            size={12} 
            color="#7B7979" />
            </View>
        </TouchableOpacity>
        <LogoutModal open ={openLogoutModal} setOpen = {setOpenLogoutModal} />
      </View>
      </View>
      <NavBar/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#110B1F",
    gap: 15,
    justifyContent:'space-between',
  },
  wrap:{
    alignItems: "center",
    height: '50%',
    gap: 15,
    width:'100%',
  },
  profileContainer: {
    height: 90,
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
  },
  img: {
    height: 70,
    width: 70,
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  text1: {
    fontSize: 16,
    fontWeight: "400",
    color: "#915DFF",
  },

  container1: {
    width: "90%",
    height: 160,
    backgroundColor: "#1B1130",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    gap:10,
  },
  optionContainer: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
  },
  option: {
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  text2: {
    fontSize: 18,
    fontWeight: "400",
    color: "#fff",
  },
  container2: {
    width: "90%",
    height: 60,
    backgroundColor: "#1B1130",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    gap:10,
  },
  optionContainer1: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems:'center',
  },
})
