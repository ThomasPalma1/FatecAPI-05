import React from 'react';
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, View, Touchable, TouchableOpacity } from 'react-native';
import styleGlobal from "../assets/styles/styleGlobal";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Login() {
    return (
        <View>
            <View>
                <Text style={styles.login_msg}>Usuário ou senha inválidos!</Text>
            </View>
            <View style={styles.form}>
                <TextInput style={styleGlobal.input} placeholder='Usuário' />
                <TextInput style={styleGlobal.input} placeholder='Senha' secureTextEntry={true} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styleGlobal.buttonText}>Logar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#ffffff',
    },
    login_msg: {
        fontWeight: 'bold',
        fontSize: 22,
        color: "red",
        marginTop: 10,
        marginBottom: 15
    },
    form: {
        width: "80%",
    },
    button: {
        padding: 12,
        backgroundColor: "#6FBAFF",
        alignSelf: "center",
        borderRadius: hp(3),
    }
})