import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
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
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};
const HomeDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Password Change" component={PasswordChangeScreen} />
      <Drawer.Screen name="LogOut" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

function App() {
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("logindetails");
      if (value !== null) {
        // value previously stored
        return true;
      } else {
        return false;
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {getData ? (
          <RootStack.Screen
            name="Home"
            component={HomeDrawer}
            options={({ route, navigation }) => ({
              headerTitle: "GRC",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                >
                  <Image
                    style={{ width: 30, height: 30 }}
                    source={{
                      uri:
                        "https://img.icons8.com/external-tal-revivo-filled-tal-revivo/512/external-hamburger-menu-list-with-parallel-navigation-button-basic-filled-tal-revivo.png"
                    }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity>
                  <Image
                    style={{ width: 30, height: 30, margin: 10 }}
                    source={{
                      uri:
                        "https://img.icons8.com/external-prettycons-lineal-color-prettycons/512/external-search-essentials-prettycons-lineal-color-prettycons.png"
                    }}
                  />
                </TouchableOpacity>
              )
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
