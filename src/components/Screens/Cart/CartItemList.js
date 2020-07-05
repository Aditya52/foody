import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageConstants from "../../../constants/ImageConstants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TabActions } from "@react-navigation/native";
import TabConstants from "../../../constants/TabConstants";

const CartItemList = ({ navigation }) => {
  const cartIcon = ImageConstants["cooking"];
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image style={{ width: 200, height: 200 }} source={cartIcon}></Image>
      <View
        style={{
          height: 40,
          margin: 20,
          backgroundColor: "#fff",
          borderColor: "#f37853",
          borderWidth: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            opacity: 0.7,
          }}
        >
          <Text
            style={{
              width: 150,
              padding: 10,
              color: "#000",
              fontWeight: "bold",
              fontFamily: "Roboto",
            }}
            onPress={() => {
              const jumpToAction = TabActions.jumpTo(TabConstants.DASHBAORD);
              navigation.dispatch(jumpToAction);
            }}
          >
            Browse Restaurants
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItemList;
