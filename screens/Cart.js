import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADDRESS } from "../constants/API";
const Cart = ({ route, navigation }) => {
  const [cart, setCart] = useState([]);
  const getCarts = async () => {
    const userID = await AsyncStorage.getItem("@storage_Key");
    try {
      const response = await fetch(ADDRESS + "cart/" + userID);
      const json = await response.json();
      setCart(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCarts();
  }, []);
  return (
    <ScrollView>
      <View style={styles.cartContainer}>
        <FlatList
          horizontal={false}
          data={cart}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableHighlight
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Order", item);
              }}
              underlayColor="white"
            >
              <View style={styles.cartItem}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingTop: 20,
                    paddingBottom: 10,
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#9CA2AE",
                  }}
                >
                  <View style={{ paddingLeft: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20,width:200 }}>
                      {item.restaurant_name}
                    </Text>
                    <View style={styles.productInformation}>
                      <Text>1 item -&nbsp;</Text>

                      <Text>15phút -&nbsp;</Text>

                      <Text>1km&nbsp;</Text>
                    </View>
                    {/* <View style={{ marginLeft: 8, color: "red" }}>
                      <Text style={{ color: "red" }}>Closed</Text>
                      <Text style={{ color: "#0E0E0E" }}>
                        Open at 7:30 AM tomorrow
                      </Text>
                    </View> */}
                  </View>
                  <View style={{ marginRight: 20 }}>
                    <Image
                      source={{
                        uri: item.restaurant_thumbnail,
                      }}
                      style={styles.itemImageProduct}
                    />
                  </View>
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productText: {
    color: "#FB5531",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemImageProduct: {
    width: 90,
    height: 90,
  },
  productInformation: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
});

export default Cart;
