import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from './Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import styleGlobal from '../assets/styles/styleGlobal';
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default function Menu() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
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
                    <Button icon={<FontAwesome name="user" size={hp(10)} color="white" />} color={"#6FBAFF"} title={'Meus Dados'} />
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