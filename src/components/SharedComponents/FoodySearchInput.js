import React from "react";
import { TextInput } from "react-native";
import { debounce } from "../../utils/AppUtils";
import Section from "../common/Section";
import { SafeAreaView } from "react-native-safe-area-context";

const FoodySearchInput = ({ placeholder, onChange }) => {
  return (
    <SafeAreaView>
      <Section>
        <TextInput
          style={{
            height: 50,
            margin: 10,
            padding: 10,
            borderColor: "#f37121",
            borderWidth: 2,
            fontWeight: "bold",
          }}
          autoFocus={true}
          placeholder={placeholder}
          placeholderTextColor="gray"
          onChangeText={debounce(onChange, 200)}
        />
      </Section>
    </SafeAreaView>
  );
};

export default FoodySearchInput;
