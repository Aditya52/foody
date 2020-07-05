import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { getRestList } from "../../../apis/RestApis";
import styles from "../../../styles/styles";
import Section from "../../common/Section";
import ItemSeparator from "../../common/ItemSeparator";
import Restaurant from "../../SharedComponents/Restaurant";
import { StackActions } from "@react-navigation/native";

const RestaurantList = ({ navigation }) => {
  const [shouldRefresh, setRefreshed] = useState(true);
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (shouldRefresh) {
      getRestList().then((res) => {
        setRefreshed(false);
        setList(res.restList);
      });
    }
  });

  return list ? (
    <ScrollView contentContainerStyle={styles.content}>
      <View>
        <Section header={{ title: "Top Restaurents", icon: "ios-restaurant" }}>
          <FlatList
            data={list.filter((item) => {
              return Number(item.meta.ratings) >= 4.5;
            })}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, separators }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    const pushAction = StackActions.push("Details", {
                      item: item,
                    });
                    navigation.dispatch(pushAction);
                  }}
                >
                  <Restaurant {...item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => String(item.id)}
          />
        </Section>
        <Section header={{ title: "Nearby Restaurants", icon: "md-locate" }}>
          <FlatList
            data={list}
            renderItem={({ item, separators }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    const pushAction = StackActions.push("Details", {
                      item: item,
                    });
                    navigation.dispatch(pushAction);
                  }}
                  onShowUnderlay={separators.highlight}
                >
                  <Restaurant {...item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => String(item.id)}
            ItemSeparatorComponent={ItemSeparator}
          />
        </Section>
      </View>
    </ScrollView>
  ) : null;
};

export default RestaurantList;
