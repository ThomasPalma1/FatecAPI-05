import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from '../components/Button';
import ButtonChat from '../components/ButtonChat'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabRouter, useNavigation } from '@react-navigation/native';
import styleGlobal from '../assets/styles/styleGlobal';
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Linking } from 'react-native';
import ButtonBack from '../components/ButtonBack';



export default function Adm({route}) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
               <ButtonBack onPressFunction={() => navigation.navigate('Menu', {id: route.params.id, email: data.email, cpf: data.cpf, nome: data.nome, admin: data.admin, termos: data.termos})}/>
            <View>
          
             
                <Image
                    style={styleGlobal.image}
                    source={require('../assets/images/icon.png')}
                    resizeMode={"cover"}
                />
                <Text style={styleGlobal.textMenu}>Administrador</Text>
            </View>
            <View style={styles.buttonStyleContainer}>

                <View>
                    <Button style={styles.buttonSpecial} onPressFunction={() => navigation.navigate('RegistroTermos')} icon={<MaterialIcons name="add-circle-outline" size={hp(10)} color="white" />} color={"#6FBAFF"} title={'Editar Termos'} />
                </View>
                <View>
                    <Button style={styles.buttonSpecial} onPressFunction={() => navigation.navigate('Historico')} icon={<MaterialIcons name="notes" size={hp(10)} color="white" />} color={"#6FBAFF"} title={'Termos'} />
                </View>

                <View>
                    <Button style={styles.buttonSpecial} onPressFunction={() => navigation.navigate('CadastroAdm')} icon={<MaterialIcons name="group-add" size={hp(10)} color="white" />} color={"#6FBAFF"} title={'Cadastrar Adm'} />
                </View>

                <View>
                    <Button style={styles.buttonSpecial} onPressFunction={() => navigation.navigate('cadastroObras')} icon={<MaterialIcons name="add" size={hp(10)} color="white" />} color={"#6FBAFF"} title={'Status obras'} />
                </View>


                </View>
        
        </View>
    )
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
    }
   

});