import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Button,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ADDRESS } from "../constants/API";
const Categorydetail = ({ route, navigation }) => {
  const category_id = route.params._id;
  const [isLoading, setLoading] = useState(true);
  const [restaurant, setRestaurant] = useState([]);
  const getRestaurant = async () => {
    try {
      const response = await fetch(ADDRESS + "show-restaurant/" + category_id);
      const json = await response.json();
      setRestaurant(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 0 }}>
        <View style={styles.productsContainer}>
          <Text style={styles.productText}>{route.params.name}</Text>
          <FlatList
            horizontal={true}
            data={restaurant}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <TouchableHighlight
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate("Store", item);
                }}
                underlayColor="white"
              >
                <View style={styles.productsItem}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <View style={{ marginRight: 20 }}>
                      <Image
                        source={{
                          uri: item.thumbnail,
                        }}
                        style={styles.itemImageProduct}
                      />
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold",width:200 }}>
                        {item.name}
                      </Text>
                      <View style={styles.productInformation}>
                        <FontAwesome name="clock-o" size={12} color="#FB5531" />
                        <Text>15phút&nbsp;</Text>
                        <FontAwesome
                          name="map-marker"
                          size={12}
                          color="#FB5531"
                        />
                        <Text>1km&nbsp;</Text>
                        <FontAwesome name="star" size={12} color="#FB5531" />
                        <Text>4.7</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
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

export default Categorydetail;
