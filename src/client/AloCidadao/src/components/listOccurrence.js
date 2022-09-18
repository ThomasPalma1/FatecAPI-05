import React, { useState, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styleGlobal from '../assets/styles/styleGlobal';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ButtonBack from './ButtonBack';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Menu() {

  const [solicitacoes, setSolicitacoes] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    getSolicitacoes()
  }, []);

  async function getSolicitacoes() {
    await fetch('http://192.168.1.104:5000/reports/get', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(function (res) {
        return res.json();
      }).then((data)=>{
        const eventsSolicitacoes = [];
        for (var i = 0; i < data.reports.length; i++){
          eventsSolicitacoes.push({
            titulo: data.reports[i].titulo,
            descricao: data.reports[i].descricao,
            anonimo: data.reports[i].anonimo,
            idSolicitacao: data.reports[i].id
          })
        }
        setSolicitacoes(eventsSolicitacoes);
      })
      .catch(function (error) {
        console.log(error.message);
        throw error;
      });
  }


  async function deleteSolcitacao(idSolicitacao){
    await fetch(`http://192.168.1.104:5000/reports/${idSolicitacao}`,{
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idSolicitacao}),
    })
    .then( Alert.alert(
      "Sucesso!",
      "Ocorrência excluída com sucesso.",
      [
        { text: "OK", onPress: () => getSolicitacoes() }
      ]
    )
    )
     .catch(function(error) {
        console.log(error.message);
        throw error;
      });
  }

  const confirmDelete = (titulo, idSolicitacao) =>{
    Alert.alert(null, `Excluir a ocorrência ${titulo}?`, [
      {
        text: "Sim",
        onPress: () => {
          deleteSolcitacao(idSolicitacao);
        },
      },
      {
        text: "Não",
      },
    ]);
  }


  const renderItem = ({item}) =>(
    <Pressable style={styles.buttonCard}>
    <Text style={styles.textInput}>{item.titulo}</Text>
    <View style={styles.anonimo}>
      <Text>{item.descricao}</Text>
    </View>
    <Pressable 
      style={styles.options}
      onPress = {() => confirmDelete(item.titulo, item.idSolicitacao)}
    >
      <Ionicons name="trash-sharp" size={30} color="#6FBAFF" />
    </Pressable>
  </Pressable>
  )

  return (
    <View style={styles.container}>
      <ButtonBack onPressFunction={() => navigation.navigate('Menu')} />
      <View>
        <Image
          style={styleGlobal.image}
          source={require('../assets/images/icon.png')}
          resizeMode={'cover'}
        />
        <Text style={styleGlobal.textMenu}>
          Visualize suas ocorrências cadastradas.
        </Text>
      </View>
      <View style={styles.buttonStyleContainer}>
      <FlatList
            data={solicitacoes}
            renderItem={renderItem}
            keyExtractor={(item) => item.idSolicitacao}
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
  buttonStyleContainer: {
    flex: 0.9,
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
  buttonCard: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    borderColor: '#6FBAFF',
    borderStyle: 'solid',
    borderRadius: 16,
    borderWidth: 2,
    padding: 10,
    width: 350,
    height: 150,
    marginTop: 5,
    marginLeft: 30,
    marginBottom: 5
  },
  anonimo: {
    marginTop: 20,
    width: 300
  },
  options: {
    position: 'absolute',
    left: 310,
    top: 10,
  },
  estatisticas: {
    paddingTop: 20,
  },
  textInput: {
    padding: 5,
    fontSize: 20,
    lineHeight: 21,
    marginLeft: 5,
    fontWeight: 'bold',
    color: 'blue',
    top: 0,
    position: 'absolute',
  },
});
