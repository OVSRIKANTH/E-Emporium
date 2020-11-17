import React, { useState } from 'react';
import { View,StyleSheet,TextInput } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

function AppTextInput({icon, ...otherProps}) {
    const [firstName,setFirstName] = useState('');

    return (
       <View style={styles.container}>
           { icon && <MaterialCommunityIcons name={icon} size={30} color={colors.medium} style={styles.icon} /> }
           <TextInput style={defaultStyles.textinput} {...otherProps} placeholderTextColor={colors.medium}/>
       </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:'100%',
        padding:15,
        marginVertical:10,

    },
    icon:{
        marginRight:10
    },
    
})