import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { getRestList } from "../../../apis/RestApis";
import Section from "../../common/Section";
import FoodySearchInput from "../../SharedComponents/FoodySearchInput";
import Restaurant from "../../SharedComponents/Restaurant";
import ItemSeparator from "../../common/ItemSeparator";
import { StackActions } from "@react-navigation/native";

const SearchList = ({ navigation }) => {
  const [shouldRefresh, setRefreshed] = useState(true);
  const [list, setList] = useState();
  const [restList, setRestList] = useState([]);

  const placeholder = "Search for the restaurants";

  const onChange = useCallback(
    (searchText) => {
      const result = list.filter((item) => {
        const restName = String(item.name).toLocaleLowerCase();
        return restName.includes(searchText.toLocaleLowerCase());
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
    <View>
      <FoodySearchInput placeholder={placeholder} onChange={onChange} />
      <Section>
        <FlatList
          ItemSeparatorComponent={ItemSeparator}
          data={restList}
          renderItem={({ item, separators }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onShowUnderlay={separators.highlight}
                onPress={() => {
                  const pushAction = StackActions.push("Details", {
                    item: item,
                  });
                  navigation.dispatch(pushAction);
                }}
              >
                <Restaurant onPress={() => setSelectedId(item.id)} {...item} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => String(item.id)}
        />
      </Section>
    </View>
  );
};

export default SearchList;
