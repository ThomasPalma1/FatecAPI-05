import React, { useState, useEffect } from "react";
import {TextInput, StyleSheet, SafeAreaView, ScrollView, StatusBar, View, PermissionsAndroid, LogBox } from "react-native";
import styleGlobal from "../assets/styles/styleGlobal";
import ButtonPost from "../components/ButtonPost";
import Geolocation from "@react-native-community/geolocation";
import MapView, { Marker } from 'react-native-maps';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const styles = StyleSheet.create({
    contText: {
        fontWeight: "",
        width: 350,
        height: 60,
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 20
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    }, 
    map: {
        width: 300,
        height: 300,
      }
})

export default function Cep(props) {
    const [isEditable, setisEditable] = useState(false);
    const [cep, setCep] = useState("");
    const [Logradouro, setLogradouro] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Localidade, setLocalidade] = useState("");
    const [UF, setUF] = useState("");
    const [location, setLocation] = useState(null);
    const [watchID, setWatchID] = useState(0);

    useEffect(() => {
      callLocation()
    }, []);


    const callLocation = () => {
        if (Platform.OS === "ios") {
          getLocation()
        }
        else {
          const requestLocationPermission = async () => {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: "Permissão de Acesso à localização",
                message: "Este aplicativo precisa acessar sua localização",
                buttonNeutral: "Pergunte-me depois",
                buttonNegative: "Cancelar",
                buttonPositive: "Aceitar"
              }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              getLocation();
            }
            else {
              alert("Permissão de acesso negada!");
            }
          };
          requestLocationPermission();
        }
      }
      const getLocation = () => {
        Geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421
            })
          },
          (error) => alert(error.message),
          { enableHighAccuracy: true, timeout: 20000000, maximumAge: 1000 }
        );
        const watchID = Geolocation.watchPosition((position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421
          })
        });
        setWatchID(watchID);
      }
    
      const getBodyContainer = () => {
        let container = <></>
        if(props.isEditable){
            container=( <MapView
                initialRegion={location}
                showsUserLocation={true}
                style={styles.map}
                mapType="hybrid"
              >
              </MapView>)
          }else{
            container= (
            <ScrollView>
            <View>
            <TextInput style={styleGlobal.input}
                onChangeText={text => {
                    if (text.length == 8) {
                        chamarCep(text);
                    }
                }}
                keyboardType="number-pad" />
            <TextInput style={styleGlobal.input}
              placeholder={"Rua"} value={Logradouro} />
            <TextInput style={styleGlobal.input}
              placeholder={"Bairro"} value={Bairro} />
            <TextInput style={styleGlobal.input}
             placeholder={"Cidade"} value={Localidade} />
            <TextInput style={styleGlobal.input}
             placeholder={"UF"} value={UF} />
            <ButtonPost color={"#6FBAFF"} title={'Confirmar'} />
            </View>
        </ScrollView>)
          }

          console.log(isEditable)
          return container;
      }  

    const updateState = () => {
        setBairro("");
        setCep("");
        setLocalidade("");
        setLogradouro("");
        setUF("");
    };

    async function chamarCep(cep) {
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        let req = await fetch(url);
        let res = await req.json();

        setBairro(res.bairro)
        setLocalidade(res.localidade)
        setLogradouro(res.logradouro)
        setUF(res.uf)
        props.onChange(cep, res.logradouro, res.bairro, res.localidade, res.uf);
        console.log(props);
        console.log(isEditable);
    }
    return (
        
        <SafeAreaView style={styles.container}>
           {getBodyContainer()}
        </SafeAreaView>
    );
}