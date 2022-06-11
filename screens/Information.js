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
function Information({ navigation }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [userData, setUserData] = useState();
  const getUser = async () => {
    const userID = await AsyncStorage.getItem("@storage_Key");
    try {
      const response = await fetch(ADDRESS + "show-user/" + userID);
      const json = await response.json();
      setUserData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  const onUpdate = async () => {
    const userID = await AsyncStorage.getItem("@storage_Key");
    await fetch(ADDRESS+"update-user/"+userID, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password,address:address,phone_number:phoneNumber }),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.message == "Update Success") {
          navigation.navigate("Cart");
        }
      });
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        defaultValue={userData && userData.username}
        onChangeText={(value) => setUserName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        defaultValue={userData && userData.password}
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        defaultValue={userData && userData.address}
        onChangeText={(value) => setAddress(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        defaultValue={userData && userData.phone_number}
        onChangeText={(value) => setPhoneNumber(value)}
      />
      <View style={styles.button}>
        <Button title="Cập nhật thông tin" color="#FB5531" onPress={onUpdate}/>
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

export default Information;
