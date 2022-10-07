import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styleGlobal from '../assets/styles/styleGlobal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonBack from './ButtonBack';
import {RFValue} from 'react-native-responsive-fontsize';

export default function Ocurrences(props) {
  const navigation = useNavigation();

  const getBodyContainer = () => {
    let container = <></>;

    if (props.route.params.logradouro == null) {
      container = (
        <>
          <Text style={styles.text}>
            Latitude: {props.route.params.latitude}
          </Text>
          <Text style={styles.text}>
            Longitude: {props.route.params.longitude}
          </Text>
        </>
      );
    } else {
      container = (
        <>
          <Text style={styles.text}>
            Logradouro: {props.route.params.logradouro}
          </Text>
          <Text style={styles.text}>Bairro: {props.route.params.bairro}</Text>
          <Text style={styles.text}>
            Cidade: {props.route.params.localidade} - {props.route.params.uf}
          </Text>
        </>
      );
    }
    return container;
  };

  return (
    <View style={styles.container}>
      <ButtonBack onPressFunction={() => navigation.navigate('listOccurrence')} />
      <View>
        <Text style={styleGlobal.textMenu}>{props.route.params.titulo}</Text>
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
        <Text style={styles.text}>
          Descrição: {props.route.params.descricao}
        </Text>
        <Text style={styles.text}>
          Privacidade: {props.route.params.anonimo ? 'anonimo' : 'publico'}
        </Text>
        {getBodyContainer()}
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
    padding: hp(2),
    margin: hp(1),
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: RFValue(17),
    color: 'black',
  },
});
