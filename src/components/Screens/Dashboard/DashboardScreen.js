import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RestaurantList from "./RestaurantList";
import Header from "../../SharedComponents/Header";
import RestaurantDetails from "./RestaurantDetails";

const Stack = createStackNavigator();

const DashboardScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {
          const props = {
            iconKey: "foody",
            title: "Foody",
            subTitle: "Order food from available restaurants",
          };
          return <Header {...props} />;
        },
      }}
    >
      <Stack.Screen name="Restaurants" component={RestaurantList} />
      <Stack.Screen name="Details" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};

export default DashboardScreen;
