import React from "react";
import { View, Text } from "react-native";
import FoodItem from "../../SharedComponents/FoodItem";

const RestaurantMenus = ({ route }) => {
  const { item } = route.params;
  return (
    <View>
      <FoodItem {...item}></FoodItem>
    </View>
  );
};

export default RestaurantMenus;
