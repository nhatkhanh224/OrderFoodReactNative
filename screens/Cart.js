import React from "react";
import { View, StyleSheet, ScrollView, Image, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Cart = () => {
  return (
    <ScrollView>
      <View style={styles.cartContainer}>
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
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Bánh canh mệ Hoa
              </Text>
              <View style={styles.productInformation}>
                <Text>1 item -&nbsp;</Text>

                <Text>15phút -&nbsp;</Text>

                <Text>1km&nbsp;</Text>
              </View>
              <View style={{ marginLeft: 8, color: "red" }}>
                <Text style={{ color: "red" }}>Closed</Text>
                <Text style={{ color: "#0E0E0E" }}>
                  Open at 7:30 AM tomorrow
                </Text>
              </View>
            </View>
            <View style={{ marginRight: 20 }}>
              <Image
                source={{
                  uri: "https://cookbeo.com/media/2020/12/nuoc-ep-dua-hau/nuoc-ep-dua-hau-4x3.jpg",
                }}
                style={styles.itemImageProduct}
              />
            </View>
          </View>
        </View>
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
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Bánh canh mệ Hoa
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
                  uri: "https://cookbeo.com/media/2020/12/nuoc-ep-dua-hau/nuoc-ep-dua-hau-4x3.jpg",
                }}
                style={styles.itemImageProduct}
              />
            </View>
          </View>
        </View>
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
