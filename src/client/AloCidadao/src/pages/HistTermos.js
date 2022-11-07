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

export default function Historico() {
  const [solicitacoes, setSolicitacoes] = useState([]);
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <ButtonBack onPressFunction={() => navigation.navigate('Menu')} />
      <View>
        <Text style={styleGlobal.textMenu}>
          Meus termos
        </Text>
      </View>
      <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('DetailTermo')} >
      <Text style={styles.textInput}>Termo 1</Text>

    </Pressable>
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
});
