import React from "react";
import { View, Text, Image } from "react-native";
import ImageConstants from "../../../constants/ImageConstants";

const AccountDetails = () => {
  const cartIcon = ImageConstants["cooking"];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image style={{ width: 200, height: 200 }} source={cartIcon}></Image>
        <Text>Manage account is in deveopment</Text>
      </View>
    </View>
  );
};

export default AccountDetails;
