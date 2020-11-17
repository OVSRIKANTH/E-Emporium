import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

import AppText from './AppText'

function Card({title,subtitle,imageUrl, onPress}){
   
    return(
        <TouchableWithoutFeedback onPress={onPress}>
        <View style = {styles.card}>
            <Image source={{uri:imageUrl}} style={{ width:'100%',height:190 }} />
            <View style={styles.detailscontainer}>
                <AppText style={styles.Title}>    {title}    </AppText>
                <AppText style={styles.subTitle}>     {subtitle}    </AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>


    );
}

export default Card;

const styles= StyleSheet.create({
    card:{
        width:'95%',
        borderRadius:15,
        backgroundColor:'#fff',
        margin:10,
        overflow:"hidden"
    },
    detailscontainer:{
        padding:10
    },
    Title:{
    fontWeight:"900",
    fontSize: 18
    },
    subTitle:{
    fontWeight:"bold",
    fontSize: 15,
    color:"#4ecdc4"
    }
})
