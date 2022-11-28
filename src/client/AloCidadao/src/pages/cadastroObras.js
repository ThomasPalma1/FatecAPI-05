import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export default function cadastroObras() {
  
  return (
    <View style={styles.container}>
        
        <RNPickerSelect
                 onValueChange={(value) => console.log(value)}
                 items={[
                     { label: "JavaScript", value: "JavaScript" },
                     { label: "TypeScript", value: "TypeScript" },
                     { label: "Python", value: "Python" },
                     { label: "Java", value: "Java" },
                     { label: "C++", value: "C++" },
                     { label: "C", value: "C" },
                 ]}
             />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ecf7ff',
      flex: 1,
      backgroundColor: '#ffffff',
      justifyContent: 'space-between',
      flexDirection: 'column',
      alignContent: 'center',
    }})