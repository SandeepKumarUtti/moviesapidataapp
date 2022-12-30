import React from "react";
import { View, Text, StyleSheet, StatusBar, Button } from "react-native";
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
  }
});

const LoginScreen = ({ navigation }) => {
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
      </View>
    </View>
  );
};

export default LoginScreen;
