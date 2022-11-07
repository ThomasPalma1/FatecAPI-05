import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styleGlobal from '../assets/styles/styleGlobal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ButtonBack from './ButtonBack';
import {RFValue} from 'react-native-responsive-fontsize';
import MapView from 'react-native-maps';

export default function Constructions(props) {
  const navigation = useNavigation();

  const getBodyContainer = () => {
    let container = <></>;

    if (props.route.params.logradouro == null) {
      container = (
        <View
          style={{
            borderRadius: 10,
            overflow: 'hidden',
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
        <View style={styles.map}>
          <Text style={styles.textDescription}>Logradouro: {props.route.params.logradouro}</Text>
          <Text style={styles.textDescription}>Bairro: {props.route.params.bairro}</Text>
          <Text style={styles.textDescription}>
            Cidade: {props.route.params.localidade} - {props.route.params.uf}
          </Text>
        </View>
      );
    }
    return container;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <ButtonBack onPressFunction={() => navigation.navigate('Obras')} />
          </View>
          <View>
            <Text style={styleGlobal.textMenu}>
              {props.route.params.titulo}
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://spaceks.net/sites/ativafm.net/images/notimage/user_2078026677.jpg',
            }}
            style={styles.photo}
          />
        </View>

        <View style={styles.page}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Status: </Text>
            <Text style={styles.textDescription}>em andamento</Text>
            <Text style={styles.text}>Descrição:</Text>
            <Text style={styles.textDescription}>{props.route.params.descricao}</Text>
            <Text style={styles.text}>Localização:</Text>
          </View>
          <View>
            {getBodyContainer()}
            </View>
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
  page: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: hp(2),
    padding: hp(2),
    borderTopLeftRadius: hp(4),
    borderTopRightRadius: hp(4),
    alignContent: 'flex-start',
    backgroundColor: '#ecf7ff',
    width: '100%',
    height: '100%',
  },
  photo: {
    height: hp(35),
    alignSelf: 'center',
    width: '90%',
    borderRadius: hp(3),
  },
  textContainer: {
    marginTop: hp(2),
  },
  map: {
    width: wp(91),
    height: hp(40),
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontSize: RFValue(12),
  },
  text: {
    padding: hp(1),
    color: '#6FBAFF',
    fontSize: RFValue(16),
  },
  textDescription: {
    fontFamily: 'Montserrat',
    fontStyle: "normal",
    fontSize: RFValue(14),
    padding: hp(1),
  },
});
