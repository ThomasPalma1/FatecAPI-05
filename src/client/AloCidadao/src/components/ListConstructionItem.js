import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

export default function ListConstructionItem({data, handleLeft, handleRight}) {
  const renderItem = () => {
    let container = <></>;

    console.log(data);

    if (data.statusObras == 'Em Aberto') {
      container = (
        <View>
          <Text style={styles.textAberto}>{data.statusObras} </Text>
        </View>
      );
    } else if (data.statusObras == 'Em Andamento') {
      container = (
        <View>
          <Text style={styles.textAndamento}>{data.statusObras}</Text>
        </View>
      );
    } else if (data.statusObras == 'Finalizado') {
      container = (
        <View>
          <Text style={styles.textFinalizado}>{data.statusObras} </Text>
        </View>
      );
    }
    return container;
  };

  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Text style={styles.text}> {data.titulo} </Text>
        {renderItem()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#6FBAFF',
    justifyContent: 'center',
    height: hp(10),
  },
  text: {
    fontSize: RFValue(17),
    color: 'white',
  },
  rightAction: {
    height: hp(10),
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actionText: {
    fontSize: 17,
    color: '#FFF',
    padding: 20,
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textAberto: {
    fontSize: RFValue(17),
    color: 'black',
  },
  textAndamento: {
    fontSize: RFValue(17),
    color: 'yellow',
  },
  textFinalizado: {
    fontSize: RFValue(17),
    color: 'blue',
  },
});
