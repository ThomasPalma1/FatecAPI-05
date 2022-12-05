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


export default function ButtonBack(props) {
    return (
        <Pressable
            onPress={props.onPressFunction}
            style={styles.button}>
            <Ionicons name="settings" size={50} color="#6FBAFF" />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        marginTop: hp(-6),
        marginRight: hp(40),
        width: 50,
        
    },
})
