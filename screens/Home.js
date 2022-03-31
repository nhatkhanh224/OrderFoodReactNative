import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TabView, SceneMap } from "react-native-tab-view";
const { width } = Dimensions.get("window");
const Home = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 0 }}>
        <View style={styles.headerContainer}>
          <View style={styles.inputContainer}>
            <TouchableHighlight
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Search", { key: key });
              }}
              underlayColor="none"
            >
              <FontAwesome
                name="search"
                size={14}
                color="#969696"
                // onChangeText={(value) => setKey(value)}
              />
            </TouchableHighlight>

            <TextInput
              style={styles.inputText}
              placeholder="Bạn tìm gì hôm nay?"
              // onChangeText={(value) => setKey(value)}
            ></TextInput>
          </View>
          {/*  */}
          <View style={styles.cartContainer}>
            <TouchableHighlight
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate("Cart");
              }}
              underlayColor="none"
            >
              <FontAwesome name="bars" size={24} color="#fff" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.slideContainer}>
          <Image
            source={{
              uri: "https://cf.shopee.vn/file/2b90452b03b63b52fc9ba02abe7e076e_tn",
            }}
            style={styles.sectionImage}
          />
        </View>
        <View style={styles.typeProductContainer}>
          <ScrollView horizontal={true}>
            <View style={styles.listItem}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/ad/8c/7e/ad8c7e037ef516cce5f17fef4f205543.jpg",
                }}
                style={styles.itemImageCategory}
              />
            </View>
            <View style={styles.listItem}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/ad/8c/7e/ad8c7e037ef516cce5f17fef4f205543.jpg",
                }}
                style={styles.itemImageCategory}
              />
            </View>
            <View style={styles.listItem}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/ad/8c/7e/ad8c7e037ef516cce5f17fef4f205543.jpg",
                }}
                style={styles.itemImageCategory}
              />
            </View>
            <View style={styles.listItem}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/736x/ad/8c/7e/ad8c7e037ef516cce5f17fef4f205543.jpg",
                }}
                style={styles.itemImageCategory}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.collectionContainer}>
          <Text style={styles.collectionText}>Collection</Text>
          <ScrollView horizontal={true}>
            <View style={styles.listCollectionItem}>
              <Image
                source={{
                  uri: "https://stc.shopiness.vn/deal/2021/10/11/0/5/1/a/1633929121516_540.png",
                }}
                style={styles.itemImageCollection}
              />
            </View>
            <View style={styles.listCollectionItem}>
              <Image
                source={{
                  uri: "https://stc.shopiness.vn/deal/2021/10/11/0/5/1/a/1633929121516_540.png",
                }}
                style={styles.itemImageCollection}
              />
            </View>
            <View style={styles.listCollectionItem}>
              <Image
                source={{
                  uri: "https://stc.shopiness.vn/deal/2021/10/11/0/5/1/a/1633929121516_540.png",
                }}
                style={styles.itemImageCollection}
              />
            </View>
            <View style={styles.listCollectionItem}>
              <Image
                source={{
                  uri: "https://stc.shopiness.vn/deal/2021/10/11/0/5/1/a/1633929121516_540.png",
                }}
                style={styles.itemImageCollection}
              />
            </View>
          </ScrollView>
        </View>
        <View style={styles.nearYouContainer}>
          <Text style={styles.nearYouText}>Near you</Text>
          <ScrollView horizontal={true}>
            <View style={styles.listNearYouItem}>
              <Image
                source={{
                  uri: "https://cdn.beptruong.edu.vn/wp-content/uploads/2018/06/bun-dau-mam-tom-thap-cam.jpg",
                }}
                style={styles.itemImageNearYou}
              />
              <Text style={styles.listNearYouTextItem}>Bún đậu chị Hằng</Text>
              <View style={styles.listNearYouItemContainer}>
                <View style={styles.listNearYouItemInformation}>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km</Text>
                </View>
                <View style={styles.listNearYouItemInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút</Text>
                </View>
              </View>
            </View>
            <View style={styles.listNearYouItem}>
              <Image
                source={{
                  uri: "https://cdn.beptruong.edu.vn/wp-content/uploads/2018/06/bun-dau-mam-tom-thap-cam.jpg",
                }}
                style={styles.itemImageNearYou}
              />
              <Text style={styles.listNearYouTextItem}>Bún đậu chị Hằng</Text>
              <View style={styles.listNearYouItemContainer}>
                <View style={styles.listNearYouItemInformation}>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km</Text>
                </View>
                <View style={styles.listNearYouItemInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút</Text>
                </View>
              </View>
            </View>
            <View style={styles.listNearYouItem}>
              <Image
                source={{
                  uri: "https://cdn.beptruong.edu.vn/wp-content/uploads/2018/06/bun-dau-mam-tom-thap-cam.jpg",
                }}
                style={styles.itemImageNearYou}
              />
              <Text style={styles.listNearYouTextItem}>Bún đậu chị Hằng</Text>
              <View style={styles.listNearYouItemContainer}>
                <View style={styles.listNearYouItemInformation}>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km</Text>
                </View>
                <View style={styles.listNearYouItemInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút</Text>
                </View>
              </View>
            </View>
            <View style={styles.listNearYouItem}>
              <Image
                source={{
                  uri: "https://cdn.beptruong.edu.vn/wp-content/uploads/2018/06/bun-dau-mam-tom-thap-cam.jpg",
                }}
                style={styles.itemImageNearYou}
              />
              <Text style={styles.listNearYouTextItem}>Bún đậu chị Hằng</Text>
              <View style={styles.listNearYouItemContainer}>
                <View style={styles.listNearYouItemInformation}>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km</Text>
                </View>
                <View style={styles.listNearYouItemInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
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
                    uri: "https://images.foody.vn/res/g66/658642/prof/s576x330/foody-mobile-2-jpg-648-636301826042522442.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Highlands Coffee</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Coffee</Text>
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
                    uri: "https://images.foody.vn/res/g66/658642/prof/s576x330/foody-mobile-2-jpg-648-636301826042522442.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Highlands Coffee</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Coffee</Text>
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
                    uri: "https://images.foody.vn/res/g66/658642/prof/s576x330/foody-mobile-2-jpg-648-636301826042522442.jpg",
                  }}
                  style={styles.itemImageProduct}
                />
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Highlands Coffee</Text>
                <View style={styles.productInformation}>
                  <FontAwesome name="clock-o" size={12} color="#FB5531" />
                  <Text>15phút&nbsp;</Text>
                  <FontAwesome name="map-marker" size={12} color="#FB5531" />
                  <Text>1km&nbsp;</Text>
                  <FontAwesome name="star" size={12} color="#FB5531" />
                  <Text>4.7</Text>
                </View>
                <Text style={{ marginLeft: 8, color: "gray" }}>Coffee</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#FB5531",
  },
  inputContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 7,
  },
  inputText: {
    color: "#969696",
    fontSize: 17,
    marginLeft: 8,
    fontWeight: "500",
  },
  cartContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  slideContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    marginTop: 10,
  },
  sectionImage: {
    width: width - 24,
    height: 130,
    borderRadius: 4,
  },
  typeProductContainer: {
    marginTop: 20,
  },
  listItem: {
    marginLeft: 10,
  },
  itemImageCategory: {
    width: 80,
    height: 80,
  },
  collectionContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  collectionText: {
    color: "#FB5531",
    fontSize: 18,
    fontWeight: "bold",
  },
  listCollectionItem: {
    marginTop: 20,
    marginLeft: 10,
  },
  itemImageCollection: {
    width: 120,
    height: 120,
  },
  nearYouContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  nearYouText: {
    color: "#FB5531",
    fontSize: 18,
    fontWeight: "bold",
  },
  listNearYouItem: {
    marginTop: 20,
    marginLeft: 10,
  },
  itemImageNearYou: {
    width: 100,
    height: 100,
  },
  listNearYouTextItem: {
    fontWeight: "bold",
    fontSize: 13,
  },
  listNearYouItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listNearYouItemInformation: {
    flexDirection: "row",
    alignItems: "center",
  },
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

export default Home;
