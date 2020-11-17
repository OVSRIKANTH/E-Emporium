//rsf
import React from 'react';
import { View,StyleSheet, TouchableOpacity,Platform } from 'react-native';

import AppText from './AppText'

function AppButton({children, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>     
            <AppText style={styles.apptext}>{children}</AppText>
        </TouchableOpacity>
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#fc5c65',
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:12,
        width:'100%'

    },
    apptext:{
        color:'#f4f4f4',
        fontWeight:'bold',
        fontSize:18,
        fontFamily:Platform.OS === "android" ? 'Roboto' : 'Avenir',
    }
})


