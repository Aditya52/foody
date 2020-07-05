import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";

const Section = ({ header, children }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.content, { backgroundColor: colors.card }]}>
      {header && (
        <View style={styles.header}>
          <Ionicons name={header.icon} size={20} color={colors.text} />
          <Text style={styles.title}>{header.title}</Text>
        </View>
      )}
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  content: {
    marginTop: 5,
    marginBottom: 5,
  },
  header: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  title: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
});
