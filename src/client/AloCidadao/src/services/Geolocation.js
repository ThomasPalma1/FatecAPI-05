import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, PermissionsAndroid, Button, Platform, LogBox, FlatList } from "react-native";
import Geolocation from "@react-native-community/geolocation";
import MapView, { Marker } from 'react-native-maps';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    width: '100%',
    height: '100%',
  },
  boldText: {
    color: 'black',
  },
  text:{
    color: 'black',
  },
  button:{
    alignItems: 'center',
    borderRadius: 25,
    margin: 10,
    justifyContent: 'flex-end'
  },
  map: {
    width: 300,
    height: 300,
  }
})

export default function App() {

  const [watchID, setWatchID] = useState(0);
  const [location, setLocation] = useState(null);

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

    container=( <MapView
      initialRegion={location}
      showsUserLocation={true}
      style={styles.map}
      mapType="hybrid"
    >
    </MapView>)

    return container;
  }

 return (
    <View style={styles.container}>
      {getBodyContainer()}
    </View>
  );
}