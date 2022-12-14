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
import MeusDados from "./src/pages/MeusDados";
import ListConstruction from "./src/components/listConstruction";
import Constructions from "./src/components/Constructions";
import Adm from "./src/pages/Adm";
import Historico from "./src/pages/HistTermos";
import TermosDesc from "./src/pages/TermosDesc";
import CadastroAdm from "./src/pages/cadastroAdm";
import RegistroTermos from "./src/pages/RegistroTermos";
import cadastroObras from "./src/pages/cadastroObras";
import ConstructionsAdmin from "./src/pages/ConstructionsAdmin";

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
        <Stack.Screen name= "Ocurrences" component={Occurrences}/>
        <Stack.Screen name= "Cadastro" component={Cadastro}/>
        <Stack.Screen name= "Termos" component={Termos}/>
        <Stack.Screen name= "MeusDados" component={MeusDados}/>
        <Stack.Screen name= "Obras" component={ListConstruction}/>
        <Stack.Screen name= "Constructions" component={Constructions}/>
        <Stack.Screen name= "ConstructionsAdmin" component={ConstructionsAdmin}/>
        <Stack.Screen name= "Adm" component={Adm}/>
        <Stack.Screen name="Historico" component={Historico}/>
        <Stack.Screen name="DetailTermo" component={TermosDesc}/>
        <Stack.Screen name="CadastroAdm" component={CadastroAdm}/>
        <Stack.Screen name="RegistroTermos" component={RegistroTermos}/>
        <Stack.Screen name="cadastroObras" component={cadastroObras}/>
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
