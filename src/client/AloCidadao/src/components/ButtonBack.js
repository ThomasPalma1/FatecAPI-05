import React from 'react';
import {
    Pressable,
    StyleSheet,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styleGlobal from '../assets/styles/styleGlobal';


export default function ButtonBack(props) {
    return (
        <Pressable
            onPress={props.onPressFunction}>
            <Ionicons name="arrow-undo-outline" size={30} color="#6FBAFF" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'flex-start',
        marginTop: hp(1),
        marginLeft: hp(1),
    },
})
