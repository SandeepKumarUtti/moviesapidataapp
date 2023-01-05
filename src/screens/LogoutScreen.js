import React from "react";
import { View, Text, StyleSheet, AsyncStorage, Button } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 40
  }
});

const LogoutScreen = ({ onSignOut, navigation }) => {
  // const removeItemValue = => {
  //   console.log(2);
  //   navigation.navigate("Login");
  // };

  return (
    <View style={styles.container}>
      <Text> Are you sure do you waht to logout your account?</Text>
      <Button
        onPress={() => navigation.navigate("Login")}
        title="Logout"
      ></Button>
    </View>
  );
};

export default LogoutScreen;
