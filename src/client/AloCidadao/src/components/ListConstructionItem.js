import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

export default function ListConstructionItem({data, handleLeft, handleRight}){
 
  return(
    

      <View style={styles.container}>
        <View style={styles.listItem}>
        <Text style={styles.text}> {data.titulo} </Text>
        <Text style={styles.text}> Em aberto </Text>
        </View>
      </View>
   
  )
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    backgroundColor: '#6FBAFF',
    justifyContent: 'center',
    height: hp(10),
  },
  text:{
    fontSize: RFValue(17),
    color: 'white'
  },
  rightAction:{
    height: hp(10),
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  actionText:{
    fontSize: 17,
    color: '#FFF',
    padding: 20,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
