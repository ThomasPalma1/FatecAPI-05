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


export default function Button(props) {
    return (
        <Pressable
            onPress={props.onPressFunction}
           
            android_ripple={{ color: '#6FBAFF' }}
            style={({ pressed }) => [
                { backgroundColor: props.color },
                styles.button,
                { ...props.style }
            ]}
        >
            {props.icon}
            <Text style={styleGlobal.buttonText}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        height: hp(21),
        width: wp(38),
        alignItems: 'center',
        borderRadius: hp(3),
        margin: hp(1),
        justifyContent: 'flex-end',
        display: 'flex',
    },
})
