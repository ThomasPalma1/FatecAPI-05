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
import { RFValue } from "react-native-responsive-fontsize";


export default function Button(props) {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#00000050' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? '#dddddd' : props.color },
                styles.button,
                { ...props.style }
            ]}
        >
            <Text>{props.icon}</Text>
            <Text style={styles.buttonText}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        color: '#ffffff',
        fontSize: RFValue(20),
        margin: hp(1),
        textAlign: 'center',
        display: 'flex',
    },
    button: {
        height: hp(21),
        width: wp(38),
        alignItems: 'center',
        borderRadius: hp(3),
        margin: hp(1),
        justifyContent: 'flex-end'
    },
})
