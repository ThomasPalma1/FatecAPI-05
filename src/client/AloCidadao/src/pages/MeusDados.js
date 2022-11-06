import React, { useState, useForm, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, Touchable, TouchableOpacity, Image, Alert } from 'react-native';
import styleGlobal from "../assets/styles/styleGlobal";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import ButtonBack from '../components/ButtonBack';
import ButtonPost from '../components/ButtonPost';
import Config from '../services/config';
import { useNavigation } from '@react-navigation/native';
import Login from '../components/Login';

export default function Cadastro({route}) {
    const navigation = useNavigation();

    console.log(route.params.id);
    console.log(route.params.email);
    console.log(route.params.cpf);

    const userId = route.params.id;
    const userEmail = route.params.email;
    const userCpf = route.params.cpf;
    const userNome = route.params.nome;

    const dadosLogin = async ()=>{ 
        await fetch(`${Config.AUTH}/user/${userId}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
          .then((res) => {console.log(res)})
          .then((data) => {console.log(data)})
          .catch((error) => {console.log(error)})
    }

    const logout = async ()=>{
        await fetch(`${Config.AUTH}/logout`, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            }
         })
         .then(function(res) {return res.json();})
         .then((data)=> { 
            console.log(data)
         })
         .catch(function(error) {
            console.log(error.message);
            throw error;
          });
      
    }


    return (
        <View style={styles.container}>
            <ButtonBack onPressFunction={() => navigation.navigate('Menu')} />
            <View style={styles.form}>
                <Text style={styles.title}>Meus Dados</Text>
                <Image style={styles.image} source={require('../assets/images/user.png')} resizeMode={"cover"} />
                <TextInput style={styleGlobal.input}
                placeholder={userNome} />
                <TextInput style={styleGlobal.input} placeholder={userEmail} />
                <TextInput style={styleGlobal.input} placeholder={userCpf} />
                <ButtonPost color={"#6FBAFF"} title={'Voltar'} 
                onPressFunction = {() => dadosLogin()}
                // onPressFunction = {() => navigation.navigate('Menu')} 
                />
                <ButtonPost color={"red"} title={'Sair'} 
                onPressFunction = {() => logout()}
                // onPressFunction = {() => navigation.navigate('Menu')} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignContent: 'center',
    },
    form: {
        flex: 0,
        display: 'flex',
        flexWrap: 'wrap',
        borderTopLeftRadius: hp(4),
        borderTopRightRadius: hp(4),
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#ecf7ff',
        width: '100%',
        height: '100%',
    },
    title: {
        fontFamily: 'Montserrat',
        alignSelf: "center",
        fontWeight: 'bold',
        fontSize: hp(4),
        color: '#6FBAFF',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: hp(-20),
    },
    input: {
        alignSelf: 'center',
        width: wp(80),
        height: hp(5),
        marginTop: hp(1),
        marginBottom: hp(1),
        borderWidth: 1,
        padding: hp(1),
        color: "black",
        backgroundColor: '#ffffff',
        borderRadius: hp(2),
        borderColor: "#6FBAFF",
        placeholderTextColor: 'black',
        fontSize: RFValue(14),
    },
    button: {
        width: wp(80),
        height: hp(5),
        marginTop: hp(1),
        backgroundColor: "#6FBAFF",
        alignSelf: "center",
        borderRadius: hp(3),
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: hp(2),
        color: "#ffffff",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    image: {
        marginBottom: hp(7),
        marginTop: hp(0.5),
        width: wp(30),
        height: hp(16),
        alignSelf: 'center',
        borderRadius: hp('21%'),
    }
})