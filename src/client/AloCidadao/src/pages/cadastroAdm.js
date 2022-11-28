import React, { useState, useForm } from 'react';
import { StyleSheet, TextInput, Text, View, Touchable, TouchableOpacity, Image, Alert } from 'react-native';
import styleGlobal from "../assets/styles/styleGlobal";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import ButtonBack from '../components/ButtonBack';
import ButtonPost from '../components/ButtonPost';
import Config from '../services/config';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';




export default function CadastroAdm() {
    
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [cpf, setCpf] = useState(null);
    const [senha, setSenha] = useState(null);
    
    const navigation = useNavigation();



    async function SalvarCadastro(){
        await fetch(`${Config.AUTH}/signup`, {
          method:'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nome:nome,
            email:email,
            cpf: cpf,
            senha:senha,
            termos: true,
            admin: true,
          })
       })
       .then(function(res) {return res.json();})
       .then((data)=> { 
        
          if(data.data==true){
              Alert.alert(
                "Sucesso!",
                "Sua conta foi criada!",
                [
                  { text: "OK", onPress: () => navigation.navigate('Adm') }
                ]
              )
          }
          else if(data.data==false)
          {
              Alert.alert(
                  "Erro!",
                  data.message,
                  [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                  ]
                ) 
          }
       })
       .catch(function(error) {
          console.log(error.message);
          throw error;
        }); 
       }



    return (
        <View style={styles.container}>
            <ButtonBack onPressFunction={() => navigation.navigate('Login')} />
            <View style={styles.form}>
                <Text style={styles.title}>Cadastro</Text>
                <Image style={styles.image} source={require('../assets/images/user.png')} resizeMode={"cover"} />
                <TextInput style={styleGlobal.input}
                value={nome} 
                onChangeText={(nome) => setNome(nome)} 
                placeholder='Nome' />
                <TextInput style={styleGlobal.input} onChangeText={text => setEmail(text)} placeholder='Email' />
                <TextInputMask style={styleGlobal.input} onChangeText={text => setCpf(text)} placeholder='CPF' maxLength={14} type={'cpf'}  />
                <TextInput style={styleGlobal.input} onChangeText={text => setSenha(text)} placeholder='Senha' secureTextEntry={true} />
                <TextInput style={styleGlobal.input} placeholder='Confirmar senha' secureTextEntry={true} />
                <ButtonPost 
        color={"#6FBAFF"} 
        title={'Salvar'}
        onPressFunction = {() => SalvarCadastro()} />

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