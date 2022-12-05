import React, {useState, useEffect} from 'react';
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
import ButtonBack from '../components/ButtonBack';
import ListItem from '../components/ListItem';
import Config from '../services/config'
import ListTermosItem from '../components/termosItem';

export default function Historico() {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    PuxarTermo();
  }, []);


  const [Termos, setTermos] = useState(null);
  async function PuxarTermo(){
      await fetch(`${Config.AUTH}/termosGeral/get`, {
        method:'GET'
        })
     .then(function(res) {return res.json();})
     .then((data)=> {
       const TermosSolicitador = [];
      for (var i = 0; i< data.termos.length; i++){
        TermosSolicitador.push({
          id: data.termos[i].id
        })
      }
        setTermos(TermosSolicitador)
     })
     .catch(function(error) {
        console.log(error.message);
        throw error;
      });
     }


  return (
    <View style={styles.container}>
    <View>
      <Text style={styleGlobal.textMenu}>
      Historico Termos
      </Text>
      <Text style={styleGlobal.textDescription}>
        clique sobre um item para visualizar mais detalhes
      </Text>
      
    </View>
    <View style={styles.container}>
      <FlatList
        data={Termos}
        keyExtractor={item => item.idSolicitacao}
        renderItem={({item}) => (
          <Pressable onPress={() => navigation.navigate('DetailTermo', {id: item.id})}>
            <ListTermosItem
              data={item}
            />
          </Pressable>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  </View>
  );
}

const Separator = () => (
  <View style={{flex: 1, height: 1, backgroundColor: '#DDD'}}></View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignContent: 'center',
  },
  button: {
   alignSelf: 'center',
    backgroundColor: '#FFF',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderRadius: 16,
    borderWidth: 2,

    width: 350,
    height: 50,

  },
  textInput: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'blue',

  },
  flat:{
    color: 'black'
  }
});
