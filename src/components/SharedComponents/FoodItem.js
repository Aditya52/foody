import React, { useEffect, useState } from "react";
import CardLayout from "../common/Card";
import { Image, Text, View, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import ImageConstants from "../../constants/ImageConstants";
import Section from "../common/Section";

const FoodItem = ({ name, meta }) => {
  const { colors } = useTheme();
  const imageUrl = ImageConstants[meta.bannerUrl];
  const cartIcon = ImageConstants["cooking"];

  return (
    <View style={{backgroundColor: "#fff", height: "100%"}}>
      <View style={styles.content}>
        <View style={styles.border}>
          <Image style={styles.banner} source={imageUrl} />
        </View>
        <View style={styles.details}>
          <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
          <Text style={styles.meta}>{meta.cousines}</Text>
          <Text style={styles.meta}>
            {`${meta.location} | ${meta.distance}`}
          </Text>
          <Text style={[styles.meta, { paddingTop: 10 }]}>
            {`${meta.offer} \t ⭐ ${meta.ratings}`}
          </Text>
        </View>
      </View>
      <View
        style={{
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image style={{ width: 200, height: 200 }} source={cartIcon}></Image>
        <Text>Food items are in development</Text>
      </View>
    </View>
  );
};

export default FoodItem;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    margin: 10,
  },
  border: {
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 4,
    padding: 3,
  },
  banner: {
    width: 90,
    height: 90,
  },
  details: {
    flexDirection: "column",
    margin: 5,
    justifyContent: "center",
    paddingLeft: 10,
  },
  name: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  meta: {
    color: "gray",
    fontSize: 12,
    fontWeight: "bold",
  },
});
