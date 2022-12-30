import React from "react";
import { Button, Image, StyleSheet, StatusBar, Text, View } from "react-native";
import Form from "./components/form";
import {
  NavigationContainer,
  DrawerActions,
  getFocusedRouteNameFromRoute
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import PasswordChangeScreen from "./screens/PasswordChangeScreen";
import LogoutScreen from "./screens/LogoutScreen";
import LoginScreen from "./screens/LoginScreen";

const RootStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};
const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Password Change" component={PasswordChangeScreen} />
      <Drawer.Screen name="LogOut" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {true ? (
          <RootStack.Screen
            name="Home"
            component={HomeDrawer}
            options={({ route, navigation }) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
              headerLeft: () => (
                <Button
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                  title="Menu"
                />
              )
              // headerRight: () => (
              //   <Button onPress={handleSignOut} title="Sign Out" />
              // )
            })}
          />
        ) : (
          <>
            <>
              <RootStack.Screen
                name="Login"
                component={LoginScreen}
                options={{
                  animationTypeForReplace: "pop"
                }}
              />
            </>
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
