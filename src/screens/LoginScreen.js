import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Form from "../components/form";

const Color = {
  bgColor: "#efeeee",
  primaryColor: "#742dd2"
};
const style = StyleSheet.create({
  Background: {
    flex: 1,
    paddingBottom: 100,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    color: Color.primaryColor,
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  container: {
    marginTop: 50,
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    width: 150,
    padding: 15,
    position: "absolute",
    backgroundColor: "#742dd2",
    borderRadius: 100,
    shadowColor: "#ffffff",
    shadowOffset: { width: -70, height: -70 },
    shadowOpacity: 0.3,
    shadowRadius: 50
  }
});

const LoginScreen = ({ onSignIn, navigation }) => {
  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("logindetails", value);
      console.log("stored");
    } catch (e) {
      // saving error
    }
  };
  const onClick = () => {
    storeData("abc");
    console.log(1);
    onSignIn();
  };

  return (
    <View backgroundColor={Color.bgColor} style={style.Background}>
      <StatusBar backgroundColor={Color.bgColor} barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={style.heading}>Login</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Form />
        <View style={style.container}>
          <TouchableOpacity style={[style.button]} onPress={onClick()}>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                textTransform: "uppercase"
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
