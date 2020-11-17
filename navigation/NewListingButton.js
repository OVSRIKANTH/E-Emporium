import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name='plus-circle' size={40} color={colors.white}/>
        </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        backgroundColor:colors.primary,  
        borderColor:colors.white,
        borderWidth:8, 
        borderRadius:40,
        bottom:20,
        height:80,
        width:80,
        justifyContent:'center'
    },

})

export default NewListingButton;