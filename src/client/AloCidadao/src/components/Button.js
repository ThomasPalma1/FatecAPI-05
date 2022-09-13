import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native';


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
            <Text style={styles.text}>
                {props.title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#ffffff',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        display: 'flex',
    },
    button: {
        width: 150,
        height: 150,
        alignItems: 'center',
        borderRadius: 25,
        margin: 10,
        justifyContent: 'flex-end'
    },
})
