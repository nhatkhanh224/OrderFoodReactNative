import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
  Button,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADDRESS } from "../constants/API";

const Order = ({ route, navigation }) => {
  const [address, setAddress] = useState();
  const [food, setFood] = useState([]);
  const [totalCart, setTotalCart] = useState([]);

  const getAddress = async () => {
    const userID = await AsyncStorage.getItem("@storage_Key");
    try {
      const response = await fetch(ADDRESS + "show-address/" + userID);
      const json = await response.json();
      setAddress(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getFood = async () => {
    const userID = await AsyncStorage.getItem("@storage_Key");
    const restaurant_id = route.params.restaurant_id;
    try {
      const response = await fetch(
        ADDRESS + "show-food-cart/" + restaurant_id + "/" + userID
      );
      const json = await response.json();
      setFood(json);
    } catch (error) {
      console.error(error);
    }
  };
  const getTotalCart = async () => {
    const restaurant_id = route.params.restaurant_id;
    try {
      const response = await fetch(ADDRESS + "get-total-cart/" + restaurant_id);
      const json = await response.json();
      setTotalCart(json);
    } catch (error) {
      console.error(error);
    }
  };
  const onOrder = async () => {
    const userID = await AsyncStorage.getItem("@storage_Key");
    return fetch(ADDRESS + "order", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userID,
        total: totalCart,
        address,
        restaurant_id: route.params.restaurant_id,
        food: food,
      }),
    })
      .then(alert("Payment Success"))
      .then(navigation.navigate("Home"));
  };
  const onDelete = (cart_id) => {
    return fetch(ADDRESS + "delete-cart", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart_id: cart_id,
      }),
    })
      .then(alert("Delete Success"))
      .then(navigation.navigate("Home"));
  };
  useEffect(() => {
    getAddress();
    getFood();
    getTotalCart();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.orderContainer}>
        <View>
          <Text style={{ fontSize: 20 }}>Giao hàng tới địa chỉ : </Text>
          <View style={styles.address}>
            <FontAwesome name="map-marker" size={26} color="#FB5531" />
            <Text style={{ fontSize: 20 }}>{address}</Text>
            <TouchableHighlight
              onPress={() => {
                navigation.navigate("Information");
              }}
              underlayColor="white"
            >
              <Text
                style={{
                  fontSize: 13,
                  marginLeft: 20,
                  color: "#FB5531",
                  textDecorationLine: "underline",
                }}
              >
                Thay đổi địa chỉ
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 17 }}>Danh sách món ăn</Text>
          <FlatList
            horizontal={false}
            data={food}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={{ marginTop: 30 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableHighlight
                    onPress={() => {
                      navigation.navigate("Food", item);
                    }}
                    underlayColor="white"
                  >
                    <Text
                      style={{
                        color: "#FB5531",
                        fontSize: 15,
                        borderWidth: 1,
                        borderColor: "gray",
                        padding: 3,
                      }}
                    >
                      {item.quantity}x
                    </Text>
                  </TouchableHighlight>
                  <Text style={{ width: 150 }}>{item.food_name}</Text>
                  <Text style={{ marginRight: 20 }}>
                    {item.price * item.quantity} đ
                  </Text>
                  <TouchableHighlight
                    onPress={() => onDelete(item._id)}
                    underlayColor="white"
                  >
                    <Text style={{ marginRight: 20 }}>
                      <FontAwesome name="trash" size={20} color="#FB5531" />
                    </Text>
                  </TouchableHighlight>
                </View>
              </View>
            )}
          />
          <View
            style={{
              marginTop: 200,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, color: "#FB5531" }}>Tổng tiền</Text>
            <Text style={{ marginRight: 20 }}>{totalCart} đ</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomButton}>
        <Button title="Thanh toán" color="red" onPress={onOrder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderContainer: {
    marginTop: 50,
    marginLeft: 20,
  },
  address: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  bottomButton: {
    right: 10,
    left: 10,
    position: "absolute",
    bottom: 10,
  },
});

export default Order;
