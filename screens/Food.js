import React from "react";
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
const Food = ({ route, navigation }) => {
  const titleButton = "Thêm vào giỏ "+new Intl.NumberFormat('vi-VN').format(route.params.price)+ " đ" ;
  return (
    <View style={{ flex: 1 }}>
      <View>
        <ImageBackground
          source={{
            uri: route.params.image,
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
          <Text style={{ fontSize: 23, fontWeight: "bold",width:170 }}>
            {route.params.name}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>{new Intl.NumberFormat('vi-VN').format(route.params.price)} đ</Text>
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
          <Button title="-" />
        </View>
        <Text style={{ fontSize: 20, paddingLeft: 10, paddingRight: 10 }}>
          1
        </Text>
        <View style={{ width: 50 }}>
          <Button title="+" />
        </View>
      </View>
      <View style={styles.bottomButton}>
        <Button title={titleButton} color="red" />
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
