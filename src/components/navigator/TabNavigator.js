import React from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const TabNavigator = ({ tabScreens, getTabBarIcon }) => {
  const Tab = createBottomTabNavigator();
  const { screens } = tabScreens;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getTabBarIcon(route.name);
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarButton: (props) => {
          return <TouchableOpacity {...props} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#f37121",
        inactiveTintColor: "gray",
      }}
    >
      {screens.map((screen) => {
        return <Tab.Screen {...screen} />;
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;
