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
import ButtonBack from './ButtonBack';
import Config from '../services/config';
import ListItem from './ListItem';
import ListConstructionItem from './ListConstructionItem';

export default function ListConstruction() {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getSolicitacoes();
  }, []);

  async function getSolicitacoes() {
    await fetch(`${Config.REPORT}/reports/get`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(data => {
        console.log(data)
        const eventsSolicitacoes = [];
        for (var i = 0; i < data.reports.length; i++) {
          eventsSolicitacoes.push({
            titulo: data.reports[i].titulo,
            descricao: data.reports[i].descricao,
            anonimo: data.reports[i].anonimo,
            idSolicitacao: data.reports[i].id,
            latitude: data.reports[i].latitude,
            longitude: data.reports[i].longitude,
            logradouro: data.reports[i].logradouro,
            localidade: data.reports[i].Localidade,
            bairro: data.reports[i].Bairro,
            uf: data.reports[i].UF,
            statusObras: data.reports[i].statusObras,
          });
        }
        setSolicitacoes(eventsSolicitacoes);
      })
      .catch(function (error) {
        console.log(error.message);
        throw error;
      });
  }

  async function deleteSolcitacao(idSolicitacao) {
    await fetch(`${Config.REPORT}/reports/${idSolicitacao}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({idSolicitacao}),
    })
      .then(
        Alert.alert('Sucesso!', 'Ocorrência excluída com sucesso.', [
          {text: 'OK', onPress: () => getSolicitacoes()},
        ]),
      )
      .catch(function (error) {
        console.log(error.message);
        throw error;
      });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styleGlobal.textMenu}>
         Obras em andamento
        </Text>
        <Text style={styleGlobal.textDescription}>
          clique sobre um item para visualizar mais detalhes
        </Text>
        
      </View>
      <View style={styles.container}>
        <FlatList
          data={solicitacoes}
          keyExtractor={item => item.idSolicitacao}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('Constructions', item)}>
              <ListConstructionItem
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
});
