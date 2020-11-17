import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

import defaultStyles from '../config/styles'


function AppText({children, style, ...otherProps}){
   
    return(<Text style={[defaultStyles.textinput,style]} {...otherProps}>{children}</Text>);
}

export default AppText;















{/*

    const styles = StyleSheet.create({
    text:{
        fontSize:18,
        fontFamily:Platform.OS === "android" ? 'Roboto' : 'Avenir'

    }
})




const styles = StyleSheet.create({
    text:{
        //fontSize:20,
        //fontFamily:'Roboto'
        color:'black',
        ...Platform.select({
            ios:{
                fontSize:18,
                fontFamily:"Avenir"
            },
            android:{
                fontSize:20,
                fontFamily:"Roboto"
            }    
        })
    }

})

*/}