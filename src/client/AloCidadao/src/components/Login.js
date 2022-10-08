import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, Touchable, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import { RFValue } from "react-native-responsive-fontsize";
import ButtonBack from './ButtonBack';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();
    const onPress = () => navigation.navigate('Cadastro');
    const [display, setDisplay] = useState('none'); 
    //chamei um estado inicial display com um valor none e to passando ele no css
    //onPress={()=>setDisplay(value='flex')} => dentro do TouchableOpacity button (pra mostrar q o usuário ou senha são inválidos)
    //PS. não funcionou
    return (
        <View style={styles.container}>
            <ButtonBack onPressFunction={() => navigation.navigate('Menu')} />
            <View>
                <Text style={styles.login_msg(display)}>Usuário ou senha inválidos!</Text>
            </View>
            <View style={styles.form}>
                <Text style={styles.title}>Entrar</Text>
                <Image style={styles.image} source={require('../assets/images/user.png')} resizeMode={"cover"} />
                <TextInput style={styles.input} placeholder='Usuário' />
                <TextInput style={styles.input} placeholder='Senha' secureTextEntry={true} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onPress} style={styles.register}>
                    <Text style={styles.regText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf7ff',
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignContent: 'center',
    },
    title: {
        fontFamily: 'Montserrat',
        alignSelf: "center",
        fontWeight: 'bold',
        fontSize: hp(4),
        color: '#6FBAFF',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: hp(1),
        marginTop: hp(-22),
    },
    login_msg: (text = 'none') => ({
        fontWeight: 'bold',
        fontSize: 22,
        color: "red",
        marginTop: 10,
        marginBottom: 15,
        display: text,
    }),
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
    register: {
        marginTop: 14,
        alignSelf: 'center',
    },
    regText: {
        color: '#a1a1a1',
        marginBottom: hp(-7)
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