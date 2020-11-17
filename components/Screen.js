import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


function Screen({children,style}) {
    // console.log("-------------");
    // console.log(Constants);
    return (
        <SafeAreaView style={[styles.screen,style]}>{children}</SafeAreaView>

    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1
    }

})

export default Screen;