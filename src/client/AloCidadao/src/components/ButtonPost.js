import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import styleGlobal from '../assets/styles/styleGlobal';


export default function ButtonPost(props) {
    return (
        <Pressable
            onPress={props.onPressFunction}
            disabled={props.disabled}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#00000050' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#dddddd' : props.color },
                styles.button,
                { ...props.style }
            ]}>
            <Text style={styleGlobal.buttonText}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        height: hp(6),
        width: wp(75),
        alignItems: 'center',
        borderRadius: hp(3),
        margin: hp(1),
        justifyContent: 'center'
    },
})
