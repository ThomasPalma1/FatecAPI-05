import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styleGlobal from './src/assets/styles/styleGlobal';
import RegisterOccurrence from './src/components/RegisterOccurrence';
import SemConexao from './src/components/SemConexao';
import NetInfo from "@react-native-community/netinfo"
import Index from './src/components/Index'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()


function  AloCidadao() {
  const [connState, setConnState] = useState(true);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setConnState(state.isConnected);
      console.log("Tipo de conexão", state.type);
      console.log("Está conectado?", state.isConnected);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      setConnState(state.isConnected);
      console.log("Tipo de conexão", state.type);
      console.log("Está conectado?", state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <View style={styleGlobal.container}>
      {connState == true ? 
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name = "Index" component={Index}/>
        <Stack.Screen name= "RegisterOccurrence" component={RegisterOccurrence}/>
      </Stack.Navigator>
      :<SemConexao/>}  
    </View>
  );
}
 
export default() => {
  return(
    <NavigationContainer>
      <AloCidadao/>
    </NavigationContainer>
  )
}
