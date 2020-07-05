import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  content: {
    paddingVertical: 5,
  },
  author: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#eee",
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: "flex-start",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 21,
  },
  avatar: {
    height: 40,
    width: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical: 8,
  },
});

export default styles;
