import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
} from "react-native";
import {ADDRESS} from "../constants/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Register({ navigation }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const onRegister = async () => {
    await fetch(ADDRESS+"register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password,address:address,phone_number:phoneNumber }),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.message == "Register Success") {
          navigation.navigate("Login");
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(value) => setUserName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(value) => setAddress(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={(value) => setPhoneNumber(value)}
      />
      <View style={styles.button}>
        <Button title="Đăng ký" color="#FB5531" onPress={onRegister}/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:50
  },
  input: {
    height: 40,
    margin: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20
  },
  button: {
    margin: 20,
  },
});

export default Register;
