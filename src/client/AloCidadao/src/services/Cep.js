import React, { useState } from "react";
import {TextInput, StyleSheet, SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import styleGlobal from "../assets/styles/styleGlobal";
import ButtonPost from "../components/ButtonPost";

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
})

export default function Cep(props) {
    const [isEditable, setisEditable] = useState(false);
    const updateState = () => {
        setBairro("");
        setCep("");
        setLocalidade("");
        setLogradouro("");
        setUF("");
    };
    const [cep, setCep] = useState("");
    const [Logradouro, setLogradouro] = useState("");
    const [Bairro, setBairro] = useState("");
    const [Localidade, setLocalidade] = useState("");
    const [UF, setUF] = useState("");

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
            <ScrollView>
                <View>
                <TextInput style={styleGlobal.input}
                    editable={props.isEditable} placeholder={"CEP"}
                    onChangeText={text => {
                        if (text.length == 8) {
                            chamarCep(text);
                        }
                    }}
                    keyboardType="number-pad" />
                <TextInput style={styleGlobal.input}
                    editable={isEditable} placeholder={"Rua"} value={Logradouro} />
                <TextInput style={styleGlobal.input}
                    editable={isEditable} placeholder={"Bairro"} value={Bairro} />
                <TextInput style={styleGlobal.input}
                    editable={isEditable} placeholder={"Cidade"} value={Localidade} />
                <TextInput style={styleGlobal.input}
                    editable={isEditable} placeholder={"UF"} value={UF} />
                <ButtonPost color={"#6FBAFF"} title={'Confirmar'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}