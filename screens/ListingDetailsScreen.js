import React from 'react';
import { View,StyleSheet,Image } from 'react-native';

import AppText from '../components/AppText'
import ListItem from '../components/lists/ListItem'

import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
    const listing = route.params
    
    return (
       <View>
           <Image style={styles.image} source={{uri:listing.images[0].url}}/>
           <View style={styles.detailscontainer}>
               <AppText style={styles.title}>{listing.title}</AppText>
               <AppText style={styles.subtitle}>${listing.price}</AppText>
           </View>
           <ListItem image={require('../assets/manc.jpg')} title={"Tony"} subtitle={"9 Listings"}/>
       </View>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:250
    },
    detailscontainer:{
        padding:10
    },
    title:{
        fontSize:24,
        fontWeight:'500'
    },
    subtitle:{
        fontWeight:"bold",
        marginVertical:10,
        color:colors.secondry
    }
})