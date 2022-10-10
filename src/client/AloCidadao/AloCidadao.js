import React, { useState, useEffect } from "react";
import { View } from "react-native";
import styleGlobal from './src/assets/styles/styleGlobal';
import RegisterOccurrence from './src/components/RegisterOccurrence';
import SemConexao from './src/components/SemConexao';
import NetInfo from "@react-native-community/netinfo"
import ListOccurrence from './src/components/listOccurrence';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./src/components/Menu";
import Occurrences from "./src/components/Ocurrences";
import Login from "./src/components/Login";
import Cadastro from "./src/components/Cadastro";
import Termos from "./src/pages/termos";

const Stack = createStackNavigator()


function  AloCidadao() {
  const [connState, setConnState] = useState(true);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      setConnState(state.isConnected);
    });

    const unsubscribe = NetInfo.addEventListener(state => {
      setConnState(state.isConnected);
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
        <Stack.Screen name= "Login" component={Login}/>
        <Stack.Screen name= "Menu" component={Menu}/>
        <Stack.Screen name= "ListOccurrence" component={ListOccurrence}/>
        <Stack.Screen name= "RegisterOccurrence" component={RegisterOccurrence}/>
        <Stack.Screen name= "listOccurrence" component={ListOccurrence}/>
        <Stack.Screen name= "Ocurrences" component={Occurrences}/>
        <Stack.Screen name= "Cadastro" component={Cadastro}/>
        <Stack.Screen name= "Termos" component={Termos}/>
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
