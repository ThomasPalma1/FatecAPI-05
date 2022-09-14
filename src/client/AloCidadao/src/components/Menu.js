import React, { useState } from 'react';
import {
    View,
} from 'react-native';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Menu() {
    return (
        <View>
            <View>
                <Button icon={<Icon name="assignment" size={80} color="white" />} buttomColor={"white"} color={"#6FBAFF"} title={'Solicitar'}/>
            </View>
            <View>
                <Button icon={<Icon2 name="user" size={80} color="white" />} color={"#6FBAFF"} title={'Meus Dados'}/>
            </View>
            <View>
                <Button icon={<Icon3 name="clipboard-text-search-outline" size={80} color="white" />} buttomColor={"white"} color={"#6FBAFF"} title={'Solcitações'}/>
            </View>
            <View>
                <Button icon={<Icon name="construction" size={80} color="white" />} color={"#6FBAFF"} title={'Obras'}/>
            </View>
        </View>
    )
}

