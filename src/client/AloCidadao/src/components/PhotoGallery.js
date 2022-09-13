import React, { useState } from 'react';
import {
    Alert,
    Image,
    View,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PermissionsAndroid } from 'react-native';
import styleGlobal from '../assets/styles/styleGlobal';
import AntDesign from './AntDesign';

export default function PhotoGallery() {
    const [imageSelected, setimageSelected] = useState(null);


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "App Camera Permission",
                    message: "App needs access to your camera ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK",
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("Camera permission given");
                pickImageFromCamera();
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const pickImageFromGalery = async () => {

        const options = {
            mediaType: 'photo'
        }

        const result = await launchImageLibrary(options);

        console.log(result);

        if (result.assets) {
            console.log(result.assets);
            setimageSelected(result.assets[0].uri)
            return
        }

        // tratar depois...

    }

    const pickImageFromCamera = async () => {


        const options = {
            mediaType: 'photo',
            saveToPhotos: false,
            cameraType: 'back',
            quality: 1
        }
        const result = await launchCamera(options);

        console.log(result);

        if (result.assets) {
            console.log(result.assets);
            setimageSelected(result.assets[0].uri)
            return
        }
    }

    const getPhotoFrom = () => {
        Alert.alert(
            "Selecione",
            "Informe de onde você quer pegar a foto",
            [
                {
                    text: "Galeria",
                    onPress: () => pickImageFromGalery(),
                    style: "default"
                },
                {
                    text: "Camera",
                    onPress: () => pickImageFromCamera(),
                    style: "default"
                },
            ],
            {
                cancelable: true,
                onDimiss: () => console.log('tratar depois...')
            }
        )
    }


    const getBodyContainer = () => {
        let container = <></>

        if (imageSelected !== null) {
            container = (
                <View style={styleGlobal.containerPhoto}>
                    {imageSelected && <Image source={{ uri: imageSelected }} style={styleGlobal.photo} />}
                    <View>
                        <Button icon={<AntDesign name="pluscircleo" size={80} color="white" />} color={"#6FBAFF"} title={'Adicionar'} onPressFunction={getPhotoFrom} />
                    </View>
                </View>)
        } else {
            container = (
            <View>
                <View>
                    <Button icon={<Icon name="photo-camera" size={80} color="white" />} buttomColor={"white"} color={"#6FBAFF"} title={'Camera'} onPressFunction={requestCameraPermission} />
                </View>
                <View>
                    <Button icon={<Icon name="photo" size={80} color="white" />} color={"#6FBAFF"} title={'Galeria'} onPressFunction={pickImageFromGalery} />
                </View>
            </View>
        )}
        return container;
    }


    return (
        <>{getBodyContainer()}</>
    )
}

