import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../../SharedComponents/Header";
import CartItemList from "./CartItemList";

const Stack = createStackNavigator();

const CartScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {
          const props = {
            iconKey: "foody",
            title: "Cart",
            subTitle: "No food items added to the cart",
          };
          return <Header {...props} />;
        },
      }}
    >
      <Stack.Screen name="Cart" component={CartItemList} />
    </Stack.Navigator>
  );
};

export default CartScreen;
