import React, { useState } from 'react';
import {
    Image,
    View,
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function PhotoGallery() {
    const [imageSelected, setimageSelected] = useState(null);


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

    return (
        <View>
            <View>
                <Button icon={<Icon name="photo-camera" size={80} color="white" />} buttomColor={"white"} color={"#6FBAFF"} title={'Camera'} onPressFunction={pickImageFromCamera} />
            </View>
            {imageSelected && <Image source={{ uri: imageSelected }} style={{ width: 200, height: 200 }} />}
            <View>
                <Button icon={<Icon name="photo" size={80} color="white" />} color={"#6FBAFF"} title={'Galeria'} onPressFunction={pickImageFromGalery} />
            </View>
        </View>
    )
}

