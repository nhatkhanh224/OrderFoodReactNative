import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const image = {
  uri: "https://toplist.vn/images/800px/kem-bo-co-cuc-282727.jpg",
};
const Store = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          {/* <Text style={styles.text}>Inside</Text> */}
        </ImageBackground>
        <View style={styles.informationStore}>
          <Text
            style={{ textAlign: "center", fontSize: 30, fontWeight: "700" }}
          >
            Chè Bơ Cô Cúc
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
          <View style={styles.productsItem}>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <View style={{ marginRight: 20 }}>
                <Image
                  source={{
                    uri: "https://toplist.vn/images/800px/kem-bo-co-van-282726.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Chè bơ</Text>
                <Text>20,000</Text>
              </View>
            </View>
          </View>
          <View style={styles.productsItem}>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <View style={{ marginRight: 20 }}>
                <Image
                  source={{
                    uri: "https://toplist.vn/images/800px/kem-bo-co-van-282726.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Chè bơ</Text>
                <Text>20,000</Text>
              </View>
            </View>
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
    height: 140,
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
