import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styleGlobal from '../assets/styles/styleGlobal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonBack from './ButtonBack';
import {RFValue} from 'react-native-responsive-fontsize';
import MapView, {Marker} from 'react-native-maps';

export default function Ocurrences(props) {
  const navigation = useNavigation();
  
  const getBodyContainer = () => {
    // setLatitude(props.route.params.latitude)
    //setLongitude(props.route.params.longitude)
    let container = <></>;
  
    if (props.route.params.logradouro == null) {
      container = (
        <View
          style={{
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          
          }}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(props.route.params.latitude),
              longitude: parseFloat(props.route.params.longitude),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            mapType="hybrid"
          />
        </View>
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
      <ScrollView>
        <ButtonBack
          onPressFunction={() => navigation.navigate('listOccurrence')}
        />
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
          <Text style={styles.title}>Descrição:</Text>
          <Text style={styles.text2}>{props.route.params.descricao}</Text>
        </View>
        <View style={styles.buttonStyleContainer}>
          <Text style={styles.text}>
            Privacidade: {props.route.params.anonimo ? 'anônimo' : 'publico'}
          </Text>
        </View>
        <View style={styles.containerMaps}>
          {getBodyContainer()}
        </View>
      </ScrollView>
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
  containerMaps:{
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'center',
    margin: 10
  },
  text: {
    fontSize: RFValue(17),
    color: 'black',
  },
  text2: {
    fontSize: 17,
    textAlign: 'justify',
    padding: hp(2),
    margin: hp(1),
  },
  title: {
    marginTop: 10,
    color: '#000000',
    fontSize: 30,
    textAlign: 'center',
  },
  map: {
    width: wp(80),
    height: hp(40)
  },
});
