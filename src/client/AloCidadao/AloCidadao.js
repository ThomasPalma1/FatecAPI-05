import React from 'react';
import { SafeAreaView, View } from 'react-native';
import styleGlobal from './src/assets/styles/styleGlobal';
import RegisterOccurrence from './src/components/RegisterOccurrence';

const AloCidadao = () => {
  return (
    <View style={styleGlobal.container}>
      <RegisterOccurrence/>
    </View>
  );
}
export default AloCidadao;