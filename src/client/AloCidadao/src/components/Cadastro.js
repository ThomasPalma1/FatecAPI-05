import React from 'react';
import { StyleSheet, TextInput, Text, View, Touchable, TouchableOpacity } from 'react-native';
import styleGlobal from "../assets/styles/styleGlobal";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import ButtonBack from './ButtonBack';
import {useNavigation} from '@react-navigation/native';

export default function Cadastro() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ButtonBack onPressFunction={() => navigation.navigate('Menu')} />
            <View style={styles.form}>
            <Text style={styles.title}>CADASTRO</Text>
                <TextInput style={styleGlobal.input} placeholder='Nome' />
                <TextInput style={styleGlobal.input} placeholder='Email' />
                <TextInput style={styleGlobal.input} placeholder='CPF' />
                <TextInput style={styleGlobal.input} placeholder='Senha' secureTextEntry={true} />
                <TextInput style={styleGlobal.input} placeholder='Confirmar senha' secureTextEntry={true} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Criar conta</Text>
                </TouchableOpacity>
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
        alignSelf: "center",
        fontWeight: 'bold',
        fontSize: hp(4),
        color: '#6FBAFF',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: hp(12),
        marginTop: hp(-10),
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
        // marginBottom: hp(1),
        // padding: hp(1),
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
        // marginTop: 10,
        // marginBottom: 15,
    },
})