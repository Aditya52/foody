import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { getRestList } from "../../../apis/RestApis";
import Section from "../../common/Section";
import FoodySearchInput from "../../SharedComponents/FoodySearchInput";
import Restaurant from "../../SharedComponents/Restaurant";
import { createStackNavigator } from "@react-navigation/stack";
import SearchList from "./SearchList";

const Stack = createStackNavigator();

const SearchScreen = () => {
  const [shouldRefresh, setRefreshed] = useState(true);
  const [list, setList] = useState();
  const [restList, setRestList] = useState([]);

  const onChange = useCallback(
    (searchText) => {
      const result = list.filter((item) => {
        return String(item.name)
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase());
      });
      setRestList(result);
    },
    [restList, setRestList, list]
  );

  useEffect(() => {
    if (shouldRefresh) {
      getRestList().then((res) => {
        setRefreshed(false);
        setList(res.restList);
      });
    }
  });

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SearchList" component={SearchList} />
    </Stack.Navigator>
  );
};

export default SearchScreen;
