import Ionicons from "@expo/vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import RestaurantMenus from "./RestaurantMenus";
import { Text } from "react-native";

const Stack = createStackNavigator();

const RestaurantDetails = ({ route }) => {
  const { item } = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurant Menu"
        component={RestaurantMenus}
        initialParams={{ item }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantDetails;
