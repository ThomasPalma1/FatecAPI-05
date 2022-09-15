import React, { useState } from "react";
import { StyleSheet, Text, View, PermissionsAndroid, Button, Platform } from "react-native";
import Geolocation from "@react-native-community/geolocation";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
  },
  boldText: {
  },
  text:{

  },
  button:{
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
    justifyContent: 'flex-end'
  },
})

export default function App() {

  const [currentLatitude, setCurrentLatitude] = useState("");
  const [currentLongitude, setCurrentLongitude] = useState("");
  const [watchID, setWatchID] = useState(0);

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
        const currentLatitude = JSON.stringify(position.coords.latitude);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000000, maximumAge: 1000 }
    );
    const watchID = Geolocation.watchPosition((position) => {
      const currentLatitude = JSON.stringify(position.coords.latitude);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      setCurrentLatitude(currentLatitude);
      setCurrentLongitude(currentLongitude);
    });
    setWatchID(watchID);
    console.log(currentLatitude)
    console.log(currentLongitude)
  }
  const clearLocation = () => {
    alert("monitoramento cancelado");
    setCurrentLatitude("");
    setCurrentLongitude("");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>
        Você está aqui !
      </Text>
      <Text style={styles.text}>
        Latitude: {currentLatitude}
      </Text>
      <Text style={styles.text}>
        Longitude: {currentLongitude}
      </Text>
      <View style={styles.button}>
        <Button title="Obter Localização" onPress={callLocation} />
      </View>
      <View>
        <Button title="Cancelar Monitoramento" onPress={clearLocation} />
      </View>
    </View>
  );
}