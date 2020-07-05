import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountDetails from "./AccoundDetails";
import Header from "../../SharedComponents/Header";

const Stack = createStackNavigator();

const AccountScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => {
          const props = {
            iconKey: "foody",
            title: "Account",
            subTitle: "Manage account details",
          };
          return <Header {...props} />;
        },
      }}
    >
      <Stack.Screen name="Cart" component={AccountDetails} />
    </Stack.Navigator>
  );
};

export default AccountScreen;
