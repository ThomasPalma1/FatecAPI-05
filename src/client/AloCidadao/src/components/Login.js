import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, Touchable, TouchableOpacity, Image, Alert,Pressable, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { onPress } from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import { RFValue } from "react-native-responsive-fontsize";
import ButtonPost from './ButtonPost';
import Config from '../services/config';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MeusDados from "../pages/MeusDados";
import Menu from "../components/Menu";

export default function Login(props) {
    const navigation = useNavigation();
    const onPress = () => navigation.navigate('Cadastro');
    const [display, setDisplay] = useState('none'); 
    const [email, setEmail] = useState(null);
    const [senha, setSenha] = useState(null);
    const [id, setId] = useState();


    useEffect(()=>{GoogleSignin.configure({
        webClientId: '817166456092-9ncs2hrt7jpi8i1jp7jvkaa2adfcf19r.apps.googleusercontent.com',
      });
    },[]);
    
      const googleSingIn = async ()=> {
    
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
      };


    async function Logar(props){

        await fetch(`${Config.AUTH}/login`, {
            method:'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email:email,
              senha:senha
            })
         })
         .then(function(res) {return res.json();})
         .then((data)=> { 
            if(data.data==true){
                console.log(data.nome)
                navigation.navigate('Menu', {id: data.id, email: data.email, cpf: data.cpf, nome: data.nome, admin: data.admin, termos: data.termos})
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
            <View style={styles.tela}>
                <Text style={styles.login_msg(display)}>Usuário ou senha inválidos!</Text>
            </View>
            <View>
            <View style={styles.form}>
                <Text style={styles.title}>Entrar</Text>
                <Image style={styles.image} source={require('../assets/images/user.png')} resizeMode={"cover"} />
                <TextInput style={styles.input} onChangeText={text => setEmail(text)} placeholder='Email' />
                <TextInput style={styles.input} onChangeText={text => setSenha(text)} placeholder='Senha' secureTextEntry={true} />
                <ButtonPost color={"#6FBAFF"} title={'Entrar'} onPressFunction = {() => Logar()} />
                <View>
                <Pressable onPress={()=>
            googleSingIn().then(
          res =>{
            console.log(res);
             navigation.navigate('Termos', {
                nome: null,
                email: res.user._user.email,
                cpf: '000000',
                senha: '000000'
            })
           
          })        
          .catch(error=>console.log(error))
          } 
          style={styles.btnBox}>
            <Ionicons name="logo-google" size={30} color="#6FBAFF" />
   
        </Pressable>

        
        <TouchableOpacity onPress={onPress} style={styles.register}>
                    <Text style={styles.regText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
        </View>
        </View>
     
        
      
               
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
        padding:'10%',
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
    btnBox:{
        alignItems:"center",
        
          
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
    },
    tela: {
        paddingLeft:50
    }
})