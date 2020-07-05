import React from "react";
import { View } from "react-native";
import { useTheme } from "@react-navigation/native";

const Card = ({ children }) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.card,
      }}
    >
      {children}
    </View>
  );
};
export default Card;
