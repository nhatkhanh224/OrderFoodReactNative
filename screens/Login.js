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
function Login({ navigation }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const onLogin = async () => {
    console.log(username+password);
    await fetch(ADDRESS+"login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.message == "Login Success") {
          AsyncStorage.setItem('@storage_Key', username);
          navigation.navigate("Home");
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

      <View style={styles.button}>
        <Button title="Đăng nhập" onPress={onLogin}/>
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

export default Login;
