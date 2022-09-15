import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styleGlobal from "../assets/styles/styleGlobal";

const styles = StyleSheet.create({
  inputDescription: {
    width: wp(80),
    height: hp(45),

    borderWidth: 1,
    padding: hp(1),
    color: "black",
    backgroundColor: '#ffffff',
    borderRadius: hp(3),
    textAlignVertical: "top",
    flexWrap: "wrap"
  },
});

const UselessTextInput = () => {
  const [textTitle, onChangeTextTiltle] = React.useState(null);
  const [textDescription, onChangeTextDescription] = React.useState(null);

  return (
    <SafeAreaView style={styleGlobal.center}>
      <TextInput style={styleGlobal.input} onChangeText={onChangeTextTiltle} value={textTitle} placeholder={"Título"} maxLength={30}/>
      <TextInput style={styles.inputDescription} onChangeText={onChangeTextDescription} value={textDescription} placeholder={"Descrição"} multiline={true} numberOfLines={4} />
    </SafeAreaView>
  );
};

export default UselessTextInput;