import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import ImageConstants from "../../constants/ImageConstants";

const Header = ({ iconKey, title, subTitle }) => {
  const { colors } = useTheme();
  const headerIcon = ImageConstants[iconKey];

  return (
    <SafeAreaView mode="margin" style={{ margin: 0 }}>
      <View style={[styles.content]}>
        <View style={styles.header}>
          <Image style={styles.avatar} source={headerIcon} />
          <View style={styles.meta}>
            <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
            <Text style={[styles.subTitle, { color: colors.text }]}>
              {subTitle}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#eee",
  },
  header: {
    flexDirection: "row",
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
  },
  subTitle: {
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 40,
    width: 40,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: {
    height: 24,
    width: 24,
  },
});
