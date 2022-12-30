import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Protected Favorites Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default FavoritesScreen;
