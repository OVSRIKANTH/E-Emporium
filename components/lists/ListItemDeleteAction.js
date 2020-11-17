import React from 'react';
import { View,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.delete}>
                <MaterialCommunityIcons name='trash-can-outline' size={40} color='#fff'/>
            </View>
        </TouchableWithoutFeedback>
       
    );
}

export default ListItemDeleteAction;

const styles = StyleSheet.create({
    delete:{
        backgroundColor:'#ff5252',
        height:'100%',
        width:80,
        justifyContent:'center',
        alignItems:"center"
    
    }
})