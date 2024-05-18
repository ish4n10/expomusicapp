import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

function Signup() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.formInput}>
          <Text style={styles.txt}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor=" #7B7979"
          />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.txt}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            placeholderTextColor=" #7B7979"
          />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.txt}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor=" #7B7979"
          />
        </View>
        <View style={styles.formInput}>
          <Text style={styles.txt}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            placeholderTextColor=" #7B7979"
          />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.txt}>Gender</Text>
          <TextInput
            style={styles.input}
            placeholder="Gender"
            placeholderTextColor=" #7B7979"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => (Navigation as any).navigate("CreateRoom")}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#110B1F",
    paddingVertical: 20,
  },
  subContainer: {
    width: "100%",
    height: "auto",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    top: "15%",
  },

  formInput: {
    height: "auto",
    width: "80%",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    color: "white",
    borderRadius: 5,
    marginBottom: 5,
    borderBottomWidth: 2,
    marginRight: 15,
    fontSize: 18,
  },
  txt: {
    color: "#7B7979",
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    width: "80%",
    backgroundColor: "#915DFF",
    height: 64,
    marginTop: 120,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Signup;
