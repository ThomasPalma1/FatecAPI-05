import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";

export default function ListItem({data, handleLeft, handleRight}){


  
  function RightActions({progress, dragX, onPress}){

    const scale = dragX.interpolate({
      inputRange:[-100, 0],
      outputRange:[1, 0],
      extrapolate: 'clamp'
    })

    return(
      <TouchableOpacity onPress={onPress} style={styles.rightAction}>
        <Animated.View style={[{padding: 20},  { transform: [{ scale: scale}]} ]}>
          <Icon name="trash" size={40} color="#FFF" />
        </Animated.View>
      </TouchableOpacity>
    );
  }

  console.log(data);


  return(
    
    <Swipeable
    onSwipeableLeftOpen={handleLeft}
    renderRightActions={(progress, dragX)=> 
      <RightActions progress={progress} dragX={dragX} onPress={handleRight} />}
    >
      <View style={styles.container}>
        <Text style={styles.text}> {data.titulo} </Text>
      </View>
    </Swipeable>
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
  }
});
