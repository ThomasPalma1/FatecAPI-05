import React, {useState} from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "rgb(46,226,250)",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  input:{
    backgroundColor: "white",
    padding: 15,
    fontSize: 18,
    marginTop: 7,
    borderRadius: 5,
    borderWidth: .7
  }
})

export default function Cep() {
    const [cep, setCep] = useState("");
    const [Logradouro, setLogradouro] = useState("");
    //const [Complemento, setComplemento] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Localidade, setLocalidade] = useState("");
    const [UF, setUF] = useState("");

    async function chamarCep(cep) {
        let url = `https://viacep.com.br/ws/${cep}/json/`;
        let req = await fetch(url);
        let res = await req.json();
        //console.log(res);

        setBairro(res.bairro)
        setLocalidade(res.localidade)
        //setComplemento(res.complemento)
        setLogradouro(res.logradouro)
        setUF(res.uf)
    }

    return (
        <View style={style.container}>
            <TextInput style={style.input} placeholder="CEP"
                onChangeText={text => {
                    if (text.length == 8) {
                        chamarCep(text);
                    }
                }}
                keyboardType="number-pad" />
            <TextInput style={style.input} value={Logradouro} placeholder="Rua" />
            {/*<TextInput style={style.input} value={Complemento} placeholder="Complemento" />*/}
            <TextInput style={style.input} value={Bairro} placeholder="Bairro" />
            <TextInput style={style.input} value={Localidade} placeholder="Localidade" />
            <TextInput style={style.input} value={UF} placeholder="UF" />
        </View>
    );
}