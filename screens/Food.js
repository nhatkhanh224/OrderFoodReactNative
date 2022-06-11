import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
} from "react-native";
import { Button } from "react-native-elements";
import "intl";
import "intl/locale-data/jsonp/en";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADDRESS } from "../constants/API";
const Food = ({ route, navigation }) => {
  console.log("FOOD", route.params);
  const [quantity, setQuantity] = useState(
    route.params.quantity ? route.params.quantity : 1
  );
  const titleButton = route.params.quantity
    ? "Cập nhật giỏ " +
      new Intl.NumberFormat("vi-VN").format(route.params.price * quantity) +
      " đ"
    : "Thêm vào giỏ " +
      new Intl.NumberFormat("vi-VN").format(route.params.price * quantity) +
      " đ";
  const addToCart = async () => {
    const userID = await AsyncStorage.getItem("@storage_Key");
    if (route.params.quantity) {
      return fetch(ADDRESS + "update-cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodID: route.params.food_id,
          quantity,
          userID: userID,
        }),
      })
        .then(alert("Add success"))
        .then(navigation.navigate("Order"));
    } else {
      return fetch(ADDRESS + "add-to-cart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          food_id: route.params._id,
          food_name: route.params.name,
          food_image: route.params.image,
          restaurant_id: route.params.restaurant_id,
          quantity,
          price: route.params.price,
          userID: userID,
        }),
      })
        .then(alert("Add success"))
        .then(navigation.navigate("Cart"));
    }
    
    
  };
  return (
    <View style={{ flex: 1 }}>
      <View>
        <ImageBackground
          source={{
            uri: route.params?.image || route.params?.food_image,
          }}
          resizeMode="cover"
          style={styles.image}
        >
          {/* <Text style={styles.text}>Inside</Text> */}
        </ImageBackground>
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 23, fontWeight: "bold", width: 170 }}>
            {route.params?.name || route.params?.food_name}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>
            {new Intl.NumberFormat("vi-VN").format(route.params.price)} đ
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 120,
          paddingRight: 120,
          alignItems: "center",
          marginTop: 50,
        }}
      >
        <View style={{ width: 50 }}>
          <Button
            title="-"
            onPress={() => setQuantity(quantity - 1)}
            disabled={quantity <= 0}
          />
        </View>
        <Text style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10 }}>
          {quantity}
        </Text>
        <View style={{ width: 50 }}>
          <Button title="+" onPress={() => setQuantity(quantity + 1)} />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <Button title={titleButton} color="red" onPress={addToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomButton: {
    right: 10,
    left: 10,
    position: "absolute",
    bottom: 10,
  },
  image: {
    height: 200,
  },
});

export default Food;
