import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';



function ImageInput({imageUri, onChangeImage}) {
    //const [imageUri, setImageUri] = useState();
    
    const requestPermission = async () => {
        const result = await ImagePicker.requestCameraRollPermissionsAsync();
        if(!result.granted) alert("Please give permision to your library");
    }
            
    useEffect(() => { requestPermission(); }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality:0.5
                
            });
            if(!result.cancelled) onChangeImage(result.uri);
            
            
        } catch (error) {
                console.log("Error reading an image", error)
        }
    }

    const handlePress = () => {
        if(!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure, you want to delete this image?',[
            {text:"Yes" , onPress : () => onChangeImage(null) },
            {text:"No"}
        ])
     
    }

    return (
        <>
        <TouchableWithoutFeedback  onPress={handlePress}>
            <View style={styles.container}>
            { !imageUri && <MaterialCommunityIcons name='camera' size={45} color={colors.medium}/>}
            { imageUri && <Image style={styles.image} source = {{ uri:imageUri }} />}
            
            </View>
        </TouchableWithoutFeedback>

        </>

    );
}


const styles = StyleSheet.create({
    container: {
        width:100,
        height:100,
        backgroundColor:colors.light,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'

    }

})

export default ImageInput;
