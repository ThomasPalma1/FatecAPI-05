import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  input: {
    width: 270,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
    fontWeight: "",
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  input1: {
    width: 270,
    height: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black",
    fontWeight: "",
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
});

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={"Título"} />
      <TextInput style={styles.input1} onChangeText={onChangeText1} value={text1} keyboardType="default" multiline={true} numberOfLines={4} placeholder={"Descrição"} />
    </SafeAreaView>
  );
};

export default UselessTextInput;