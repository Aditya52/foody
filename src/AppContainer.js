import React from "react";
import TabNavigator from "./components/navigator/TabNavigator";
import AccountScreen from "./components/Screens/Account/AccountScreen";
import CartScreen from "./components/Screens/Cart/CartScreen";
import DashboardScreen from "./components/Screens/Dashboard/DashboardScreen";
import SearchScreen from "./components/Screens/Search/SearchScreen";
import IconConstants from "./constants/IconContants";
import TabConstants from "./constants/TabConstants";
import { NavigationContainer } from "@react-navigation/native";

const getTabBarIcon = (tab) => {
  let iconName;
  switch (tab) {
    case TabConstants.DASHBAORD:
      iconName = IconConstants.DASHBAORD;
      break;
    case TabConstants.SEARCH:
      iconName = IconConstants.SEARCH;
      break;
    case TabConstants.CART:
      iconName = IconConstants.CART;
      break;
    case TabConstants.ACCOUNT:
      iconName = IconConstants.ACCOUNT;
      break;
    default:
      break;
  }
  return iconName;
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <TabNavigator
        tabScreens={{
          screens: [
            {
              name: "Foody",
              component: DashboardScreen,
            },
            {
              name: "Search",
              component: SearchScreen,
            },
            {
              name: "Cart",
              component: CartScreen,
            },
            {
              name: "Account",
              component: AccountScreen,
            },
          ],
        }}
        getTabBarIcon={getTabBarIcon}
      />
    </NavigationContainer>
  );
};

export default AppContainer;
