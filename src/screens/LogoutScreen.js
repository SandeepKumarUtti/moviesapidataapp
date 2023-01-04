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

const LogoutScreen = (navigation) => {
  const removeItemValue = async (value) => {
    try {
      await AsyncStorage.removeItem("logindetails");
      navigation.navigate("Home");
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={styles.container}>
      <Text> Are you sure do you waht to logout your account?</Text>
      <Button onPress={removeItemValue} title="Logout"></Button>
    </View>
  );
};

export default LogoutScreen;
