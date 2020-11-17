import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from '../AppText'
import icon from '../Icon'

function ListItem({title,subtitle,image, IconComponent, onPress, renderRightActions}){
   
    return(
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor="#000" onPress={onPress}>
            <View  style={styles.container}>

                {IconComponent} 
                { image && <Image source={image} style={styles.photo}/> }

                <View style={styles.detailscontainer}>
                    <AppText style={styles.Title} numberOfLines={1}>{title}    </AppText>
                    {subtitle && <AppText style={styles.subTitle} numberOfLines={2}>{subtitle}    </AppText>}
                </View>
            </View>

        </TouchableHighlight>
        </Swipeable>

    );
}
export default ListItem;

const styles = StyleSheet.create({
    photo:{
        width:70,
        height:70,
        borderRadius:35,
        overflow:"hidden"
    },
    container:{
        flexDirection:'row',
        padding:15,
        backgroundColor:'#fff'
    },
    detailscontainer:{
        marginLeft:15,
        justifyContent:'center',
    },
    Title:{
        fontWeight:"900",
        fontSize: 20
        },
    subTitle:{
        fontWeight:"600",
        fontSize: 16,
        color:"#6e6969"
        }


})