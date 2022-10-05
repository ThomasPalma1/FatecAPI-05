import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styleGlobal from '../assets/styles/styleGlobal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonBack from './ButtonBack';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Ocurrences(props) {
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <ButtonBack onPressFunction={() => navigation.navigate('Menu')} />
      <View>
        <Text style={styleGlobal.textMenu}>
         {props.route.params.titulo}
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: 'https://st2.depositphotos.com/4164031/6914/i/450/depositphotos_69145633-stock-photo-flag-of-brazil.jpg',
          }}
          style={styles.photo}
        />
      </View>
      <View style={styles.buttonStyleContainer}>
         <Text style={styles.text}>Descrição: {props.route.params.descricao}</Text> 
         <Text style={styles.text}>privacidade: {props.route.params.anonimo ? "anonimo" : "publico"}</Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignContent: 'center',
  },
  photo: {
    height: hp(40),
    alignSelf: 'center',
    width: '90%',
    borderRadius: hp(3),
  },
  buttonStyleContainer: {
    flex: 1,
    padding: hp(3),
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
  text:{
    fontSize: RFValue(17),
    color: 'black'
  },
});
