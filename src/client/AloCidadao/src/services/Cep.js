import React, { useState } from "react";
import { View, Switch, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import styleGlobal from "../assets/styles/styleGlobal";

const styles = StyleSheet.create({
    contText: {
        fontWeight: "",
        width: 350,
        height:60,
        backgroundColor: '#ffffff',
        margin: 5,
        borderRadius: 20
    },
    switch:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100,
    },
    
})

export default function Cep() {
    const [isEditable, setisEditable] = useState(false);
    const updateState = () => {
        //setisEditable(!isEditable);
        setBairro("");
        setCep("");
        setLocalidade("");
        setLogradouro("");
        setUF("");
    };
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
        <ScrollView>
            <View style={styles.switch}>
                <Text>Localizar pelo Dispositivo Móvel</Text>
                <Switch value={isEditable} onValueChange={setisEditable} onChange={updateState} trackColor={{ false: "#767577", true: "#81b0ff" }} thumbColor={isEditable ? "#f5dd4b" : "#f4f3f4"} />
            </View>
            <TextInput style={styleGlobal.input}
                editable={isEditable} placeholder={isEditable ? "CEP" : "CEP"}
                onChangeText={text => {
                    if (text.length == 8) {
                        chamarCep(text);
                    }
                }}
                keyboardType="number-pad" />
            <TextInput style={styleGlobal.input}
                editable={isEditable} placeholder={isEditable ? "Rua" : "Rua"} value={Logradouro} />
            {/*<TextInput style={style.input} value={Complemento} placeholder="Complemento" />*/}
            <TextInput style={styleGlobal.input}
                editable={isEditable} placeholder={isEditable ? "Bairro" : "Bairro"} value={Bairro} />
            <TextInput style={styleGlobal.input}
                editable={isEditable} placeholder={isEditable ? "Cidade" : "Cidade"} value={Localidade} />
            <TextInput style={styleGlobal.input}
                editable={isEditable} placeholder={isEditable ? "UF" : "UF"} value={UF} />
        </ScrollView>
    );
}