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
    borderRadius: 20,
    textAlignVertical: "top",
    flexWrap: "wrap"
  },
});

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [text1, onChangeText1] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder={"Título"} maxLength={30}/>
      <TextInput style={styles.input1} onChangeText={onChangeText1} value={text1} placeholder={"Descrição"} multiline={true} numberOfLines={4} />
    </SafeAreaView>
  );
};

export default UselessTextInput;