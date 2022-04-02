import React from "react";
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
const Categorydetail = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 0 }}>
        <View style={styles.productsContainer}>
          <Text style={styles.productText}>Món ăn</Text>
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
                    uri: "https://media.foody.vn/res/g72/712450/prof/s/foody-mobile-chao-bot-vit-1-jpg.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Bánh canh mệ Hoa</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Food</Text>
              </View>
            </View>
          </View>
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
                    uri: "https://media.foody.vn/res/g72/712450/prof/s/foody-mobile-chao-bot-vit-1-jpg.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Bánh canh mệ Hoa</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Food</Text>
              </View>
            </View>
          </View>
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
                    uri: "https://media.foody.vn/res/g72/712450/prof/s/foody-mobile-chao-bot-vit-1-jpg.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Bánh canh mệ Hoa</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Food</Text>
              </View>
            </View>
          </View>
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
                    uri: "https://media.foody.vn/res/g72/712450/prof/s/foody-mobile-chao-bot-vit-1-jpg.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Bánh canh mệ Hoa</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Food</Text>
              </View>
            </View>
          </View>
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
                    uri: "https://media.foody.vn/res/g72/712450/prof/s/foody-mobile-chao-bot-vit-1-jpg.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Bánh canh mệ Hoa</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Food</Text>
              </View>
            </View>
          </View>
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
                    uri: "https://media.foody.vn/res/g72/712450/prof/s/foody-mobile-chao-bot-vit-1-jpg.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Bánh canh mệ Hoa</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Food</Text>
              </View>
            </View>
          </View>
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
