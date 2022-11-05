import React, {useState, useEffect} from 'react';
import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  PermissionsAndroid,
  LogBox,
  Alert,
} from 'react-native';
import styleGlobal from '../assets/styles/styleGlobal';
import ButtonPost from '../components/ButtonPost';
import Geolocation from '@react-native-community/geolocation';
import MapView, {Marker} from 'react-native-maps';
import Config from '../services/config';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  map: {
    width: wp(80),
    height: hp(40),
  },
});

export default function Cep(props) {
  const [isEditable, setisEditable] = useState(false);
  const [cep, setCep] = useState(null);
  const [Logradouro, setLogradouro] = useState(null);
  const [Bairro, setBairro] = useState(null);
  const [Localidade, setLocalidade] = useState(null);
  const [UF, setUF] = useState(null);
  const [location, setLocation] = useState(null);
  const [watchID, setWatchID] = useState(0);

  const navigation = useNavigation();

  async function insertData() {
    if(props.isEditable){
      setLocation({
        latitude: null,
        longitude: null,
        latitudeDelta: null,
        longitudeDelta: null
      })
    }


    await fetch(`${Config.REPORT}/create`, {
        method:'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Localidade:Localidade,
          cep:cep,
          UF:UF,
          Bairro:Bairro,
          titulo:props.textTitle,
          descricao:props.textDescription,
          latitude:location.latitude,
          longitude:location.longitude,
          logradouro:Logradouro,
          anonimo:props.isAnonymous
        })
     })
     .then(function(res) {return res.json();})
     .then( Alert.alert(
      "Sucesso!",
      "Sua ocorrência foi cadastrada com sucesso.",
      [
        { text: "OK", onPress: () => navigation.navigate('ListOccurrence') }
      ]
    )

    )
     .catch(function(error) {
        console.log(error.message);
        throw error;
      });
  }

  useEffect(() => {
    callLocation();
  }, []);

  const callLocation = () => {
    if (Platform.OS === 'ios') {
      getLocation();
    } else {
      const requestLocationPermission = async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de Acesso à localização',
            message: 'Este aplicativo precisa acessar sua localização',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'Aceitar',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          alert('Permissão de acesso negada!');
        }
      };
      requestLocationPermission();
    }
  };
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        });
      },
      error => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000000, maximumAge: 1000},
    );
    const watchID = Geolocation.watchPosition(position => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });
    });
    setWatchID(watchID);
  };

  const getBodyContainer = () => {
    let container = <></>;
    if (props.isEditable) {
      container = (
        <View>
          <View
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <MapView
              initialRegion={location}
              showsUserLocation={true}
              style={styles.map}
              mapType="hybrid"></MapView>
          </View>
          <ButtonPost
            color={'#6FBAFF'}
            title={'Confirmar'}
            onPressFunction={() => insertData()}
          />
        </View>
      );
    } else {
      container = (
        <ScrollView>
          <View>
            <TextInput
              maxLength={8}
              placeholderTextColor="grey"
              placeholder={'CEP'}
              style={styleGlobal.input}
              onChangeText={text => {
                if (text.length == 8) {
                  chamarCep(text);
                  setCep(text);
                }
              }}
              keyboardType="number-pad"
            />
            <TextInput
              editable={false}
              placeholderTextColor="grey"
              style={styleGlobal.input}
              placeholder={'Rua'}
              value={Logradouro}
            />
            <TextInput
              editable={false}
              placeholderTextColor="grey"
              style={styleGlobal.input}
              placeholder={'Bairro'}
              value={Bairro}
            />
            <TextInput
              editable={false}
              placeholderTextColor="grey"
              style={styleGlobal.input}
              placeholder={'Cidade'}
              value={Localidade}
            />
            <TextInput
              editable={false}
              placeholderTextColor="grey"
              style={styleGlobal.input}
              placeholder={'UF'}
              value={UF}
            />
            <ButtonPost
              color={'#6FBAFF'}
              title={'Confirmar'}
              onPressFunction={() => insertData()}
            />
          </View>
        </ScrollView>
      );
    }

    return container;
  };

  const updateState = () => {
    setBairro('');
    setCep('');
    setLocalidade('');
    setLogradouro('');
    setUF('');
  };

  async function chamarCep(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let req = await fetch(url);
    let res = await req.json();

    setBairro(res.bairro);
    setLocalidade(res.localidade);
    setLogradouro(res.logradouro);
    setUF(res.uf);
    props.onChange(cep, res.logradouro, res.bairro, res.localidade, res.uf);
  }
  return (
    <SafeAreaView style={styles.container}>{getBodyContainer()}</SafeAreaView>
  );
}
