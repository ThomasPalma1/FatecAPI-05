import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from './Button';
import ButtonChat from './ButtonChat'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import styleGlobal from '../assets/styles/styleGlobal';
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Linking } from 'react-native';
import ButtonBack from './ButtonBack';


export default function Menu() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <ButtonChat onPressFunction={() => { Linking.openURL('https://chat.blip.ai/?appKey=dXJiYW5pdGFzOjhhNjQ4NzY1LTNhNDQtNDE2NS1iZTA1LWQ0ZjEzN2JiZWY0OQ==&_gl=1*8v525u*_ga*NzIzMzcxMjM3LjE2NjQyNzU1MzI.*_ga_VYKG6G92NK*MTY2NTI2MDE5Ny4xNy4xLjE2NjUyNjAyMjIuMC4wLjA.'); 
    }} icon={<MaterialIcons name="assignment" size={hp(2)} color="white" />} buttomColor={"white"} color={"#6FBAFF"} title={'Solicitar'} />
                </View>
                <Image
                    style={styleGlobal.image}
                    source={require('../assets/images/icon.png')}
                    resizeMode={"cover"}
                />
                <Text style={styleGlobal.textMenu}>Olá, seja bem-vindo ao Alo Cidadão!</Text>
            </View>
            <View style={styles.buttonStyleContainer}>
                <View>
                    <Button onPressFunction={() => navigation.navigate('RegisterOccurrence')} icon={<MaterialIcons name="assignment" size={hp(10)} color="white" />} buttomColor={"white"} color={"#6FBAFF"} title={'Solicitar'} />
                </View>
                <View>
                    <Button onPressFunction={() => navigation.navigate('MeusDados')} icon={<FontAwesome name="user" size={hp(10)} color="white" />} color={"#6FBAFF"} title={'Meus Dados'} />
                </View>
                <View>
                    <Button onPressFunction={() => navigation.navigate('ListOccurrence')} icon={<MaterialCommunityIcons name="clipboard-text-search-outline" size={hp(10)} color="white" />} buttomColor={"white"} color={"#6FBAFF"} title={'Solcitações'} />
                </View>
                <View>
                    <Button icon={<MaterialIcons name="construction" size={hp(10)} color="white" />} color={"#6FBAFF"} title={'Obras'} />
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
    },
});