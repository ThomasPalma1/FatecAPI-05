import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button, Image } from 'react-native';

export default function SemConexao() {
  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/images/no_connections.png')}
      style={{width:'30%',height:'30%'}}
      resizeMode="contain"
    />
    <Text style={styles.Text}>Sem conexão de internet. Por favor, se conecte para continuar utilizando o aplicativo!</Text>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    fontSize: 30,
    textAlign: 'center'
  }
});

