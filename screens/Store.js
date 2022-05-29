import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
  TouchableHighlight
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ADDRESS } from "../constants/API";

const Store = ({ route, navigation }) => {
  const image = {
    uri: route.params.thumbnail,
  };
  const restaurant_id = route.params._id;
  const [isLoading, setLoading] = useState(true);
  const [food, setFood] = useState([]);
  const getFood = async () => {
    try {
      const response = await fetch(
        ADDRESS + "show-restaurant-detail/" + restaurant_id
      );
      const json = await response.json();
      setFood(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getFood();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          {/* <Text style={styles.text}>Inside</Text> */}
        </ImageBackground>
        <View style={styles.informationStore}>
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}
          >
            {route.params.name}
          </Text>
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 20,
              alignItems: "center",
              paddingTop: 20,
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          >
            <FontAwesome name="star" size={20} color="#FB5531" />
            <Text style={{ fontSize: 20, marginLeft: 6, fontWeight: "bold" }}>
              5
            </Text>
            <Pressable
            // style={[styles.button, styles.buttonOpen]}
            // onPress={() => setModalVisible(true)}
            >
              <Text
                style={{
                  paddingLeft: 10,
                  textDecorationColor: "#000",
                  textDecorationLine: "underline",
                }}
              >
                See details
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 20,
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://assets.grab.com/wp-content/uploads/sites/4/2020/04/09161132/covid-delivery-partner-icon.png",
              }}
              style={{ width: 30, height: 30 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                1km(15 phút)
              </Text>
              <Text>Delivery Now</Text>
            </View>
          </View>
        </View>
        <View style={styles.menuContainer}>
          <Text style={styles.productText}>Menu</Text>
          <FlatList
              style={{marginLeft:30}}
              numColumns={2}
              data={food}
              keyExtractor={({ _id }, index) => _id}
              renderItem={({ item,index }) => (
                <TouchableHighlight
                  onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate("Food", item);
                  }}
                  underlayColor="white"
                >
                  <View style={styles.productsItem}>
                    <View
                      style={{
                        marginTop: 20,
                      }}
                    >
                      <View style={{ marginRight: 20 }}>
                        <Image
                          source={{
                            uri: item.image,
                          }}
                          style={styles.itemImageProduct}
                        />
                      </View>
                      <View>
                        <Text style={{ fontWeight: "bold",width:120 }}>{item.name}</Text>
                        <Text>{item.price} đ</Text>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              )}
            />
          <View
            style={{ flexDirection: "row", marginLeft: 30, flexWrap: "wrap" }}
          >
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: 200,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  informationStore: {
    backgroundColor: "#fff",
    marginLeft: 30,
    marginRight: 30,
    marginTop: -30,
    borderRadius: 20,
    height: 160,
  },
  menuContainer: {
    flex: 2,
    marginTop: 20,
    marginLeft: 10,
  },
  productText: {
    color: "#FB5531",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemImageProduct: {
    width: 120,
    height: 120,
  },
  productInformation: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
});

export default Store;
