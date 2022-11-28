import React, { useState, useForm, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, ScrollView, Image, Alert } from 'react-native';
import styleGlobal from "../assets/styles/styleGlobal";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { RFValue } from "react-native-responsive-fontsize";
import ButtonBack from '../components/ButtonBack';
import ButtonPost from '../components/ButtonPost';
import Config from '../services/config';
import { useNavigation } from '@react-navigation/native';
import Login from '../components/Login';

export default function RegistroTermos({route}) {
    const navigation = useNavigation();
    const [objeto, setObjeto] = useState(null);
    const [aceitacao, setAceitacao] = useState(null);
    const [acessoUser, setAcessoUser] = useState(null);
    const [cadastro, setCadastro] = useState(null);
    const [servico, setServico] = useState(null);
    const [preco, setPreco] = useState(null);
    const [cancelamento, setCancelamento] = useState(null);
    const [suporte, setSuporte] = useState(null);
    const [responsabilidade, setResponsabilidade] = useState(null);
    const [direitosAutorais, setDireitosAutorais] = useState(null);
    const [sancoes, setSancoes] = useState(null);
    const [rescisao, setRescisao] = useState(null);
    const [alteracoes, setAlteracoes] = useState(null);
    const [politicaPrivacidade, setPoliticaPrivacidade] = useState(null);
    const [foro, setForo] = useState(null);


    async function CadastroTermo (){
        await fetch(`${Config.AUTH}/createTermos`, {
            method:'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              objeto:objeto,
              aceitacao:aceitacao,
              acessoUser:acessoUser,
              cadastro:cadastro,
              servico:servico,
              preco:preco,
              cancelamento:cancelamento,
              suporte:suporte,
              responsabilidade:responsabilidade,
              direitosAutorais:direitosAutorais,
              sancoes:sancoes,
              rescisao:rescisao,
              alteracoes: alteracoes,
              politicaPrivacidade: politicaPrivacidade,
              foro:foro
            })
         })
         .then(function(res) {return res.json();})
         .then(
            console.log("ok")
        //      Alert.alert(
        //   "Sucesso!",
        //   "Atualização do termo realizado com sucesso.",
        //   [
        //     { text: "OK", onPress: () => navigation.navigate('ListOccurrence') }
        //   ]
        //)
    
        )
         .catch(function(error) {
            console.log(error.message);
            throw error;
          });
    }




    return (
        <View style={styles.container}>
            <ButtonBack onPressFunction={() => navigation.navigate('Menu')} />
            <Text style={styles.title}>Termos</Text>

           
            <View style={styles.form}>
                <ScrollView>
                    <View style={styles.caixas}>
                <Text style={styles.topico}>1. Do objeto</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setObjeto(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />
               
                <Text style={styles.topico}>2. Da aceitação</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setAceitacao(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />

                <Text style={styles.topico}>3. Do acesso dos usuários</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setAcessoUser(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />

                <Text style={styles.topico}>4. Do cadastro</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setCadastro(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />

                <Text style={styles.topico}>5. Dos serviços</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setServico(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />


                <Text style={styles.topico}>6. Dos preços</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setPreco(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />


                <Text style={styles.topico}>7. Do cancelamento</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setCancelamento(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />


                <Text style={styles.topico}>8. Do suporte</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setSuporte(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />


                <Text style={styles.topico}>9. Das responsabilidades</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setResponsabilidade(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />
                
                <Text style={styles.topico}>10. Dos direitos autorais</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setDireitosAutorais(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />


                <Text style={styles.topico}>11. Das sanções</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setSancoes(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />

                <Text style={styles.topico}>12. Da rescisão</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setRescisao(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />

                <Text style={styles.topico}>13. Das alterações</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setAlteracoes(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />


                <Text style={styles.topico}>14. Da política de privacidade</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setPoliticaPrivacidade(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />



                <Text style={styles.topico}>15. Do foro</Text>
                <TextInput placeholderTextColor="grey" onChangeText={text => setForo(text)} style={styles.inputDescription} placeholder={""} multiline={true} numberOfLines={4} />
                <ButtonPost 
                color={"#6FBAFF"} 
                title={'Salvar'}  
            
                style={styles.button} 
                onPressFunction = {() => CadastroTermo()} />
                </View>
                </ScrollView>
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
    inputDescription: {
        width: wp(80),
        height: hp(20),
        borderWidth: 1,
        padding: hp(1),
        color: "black",
        backgroundColor: 'white',
        borderRadius: hp(2),
        textAlignVertical: "top",
        flexWrap: "wrap",
        borderColor: "#6FBAFF",
        fontSize: RFValue(14),
      },
      caixas:{
        marginBottom: 100
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
        alignItems: 'center',

    },
    title:{
        fontSize: 26,
        alignSelf: 'center',
        marginBottom: 15,
        color: '#6FBAFF'
    },
    topico: {
        marginTop: 10,
        color: '#000000',
        fontSize: 20,
        textAlign: 'center',
        margin: 15,
      },
      button:{
        textAlign: 'center',
        alignSelf: "center",
      }
   
})