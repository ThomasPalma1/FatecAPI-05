import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Switch, View, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styleGlobal from "../assets/styles/styleGlobal";

const styles = StyleSheet.create({
  inputDescription: {
    width: wp(80),
    height: hp(40),
    borderWidth: 1,
    padding: hp(1),
    color: "black",
    backgroundColor: 'white',
    borderRadius: hp(2),
    textAlignVertical: "top",
    flexWrap: "wrap",
    borderColor: "#6FBAFF",
    fontSize: RFValue(14),
  },
  switch: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignContent: "center",
  },
  input: {
    width: wp(68),
    height: hp(5),
    marginTop: hp(1),
    marginBottom: hp(1),
    padding: hp(1),
    color: "grey",
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: hp(2),
    borderColor: "#6FBAFF",
    fontSize: RFValue(14),
  },
});

const UselessTextInput = (props) => {
  const [textTitle, onChangeTextTiltle] = useState(null);
  const [textDescription, onChangeTextDescription] = useState(null);
  const [isAnonymous, SetIsAnonymous] = useState(false);

  const toggleSwitch = () => SetIsAnonymous(previousState => !previousState);

  setTimeout(() => {
    props.onChange(textTitle, textDescription, isAnonymous);
  }, 50);
  // Here, we invoke the callback with the new value

  return (
    <SafeAreaView style={styleGlobal.center}>
      <View style={styles.switch}>
        <Switch
          trackColor={{ false: "#6FBAFF", true: "#6FBAFF" }}
          thumbColor={isAnonymous ? "#5F97CB" : "#f4f3f4"} 
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isAnonymous}
        />
        <TextInput style={styles.input} editable={false} value={isAnonymous ? "Denúncia anônima" : "Denúncia pública"} selectTextOnFocus={false} />
      </View>
      <TextInput placeholderTextColor="grey" style={styleGlobal.input} onChangeText={onChangeTextTiltle} value={textTitle} placeholder={"Título"} maxLength={30} />
      <TextInput placeholderTextColor="grey" style={styles.inputDescription} onChangeText={onChangeTextDescription} value={textDescription} placeholder={"Descrição"} multiline={true} numberOfLines={4} />
    </SafeAreaView>
  );
};

export default UselessTextInput;