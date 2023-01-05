import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import CustomInput from "./customInput";
import CustomButton from "./customButton";

class Form extends Component {
  render() {
    return (
      <View>
        <CustomInput
          name="email"
          icon="https://img.icons8.com/ios/512/user-male-circle--v1.png"
          placeholder="Email"
        />
        <CustomInput
          name="password"
          icon="https://img.icons8.com/ios-filled/512/private2.png"
          placeholder="Password"
          secure={true}
        />
        {/* <CustomButton /> */}
      </View>
    );
  }
}

export default Form;
