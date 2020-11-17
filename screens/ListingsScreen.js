import React, { useEffect, useState } from 'react';
import { View,StyleSheet,FlatList, ActivityIndicator } from 'react-native';
import Card from '../components/Card'
import Screen from '../components/Screen'
import listingsApi from '../api/listings'
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import useApi from '../hooks/useApi';

function ListingsScreen({navigation}) {
    
    const {request:loadListings, data:listings, error, loading} = useApi(listingsApi.getListings);
   
    
    useEffect( ()=> {
        loadListings();
    }, [] ); 
  

    return (
        <Screen style={styles.container}>
            {error &&
            (<>
                <AppText style={{marginVertical:10}}>Couldn't retrive the listings. {error}</AppText>
                <AppButton  onPress={loadListings}>Retry</AppButton>
            </>)}
            <ActivityIndicator animating={loading}/>
            <FlatList data={listings} keyExtractor= { listing => listing.id.toString()}
                        renderItem = {({item}) => <Card title={item.title} subtitle={'$'+item.price} imageUrl={item.images[0].url} onPress={()=>navigation.navigate("ListingDetailsScreen", item)}/> }

            />
        </Screen>
    );
}

export default ListingsScreen;

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingHorizontal:6,
        backgroundColor:'#f4f4f4'
    }
})






{/*
const listings = [
    {
        id:1,
        title:'Study Table for Sale',
        price: '100',
        image: require('../assets/studytable.jpg')
    },
    {
        id:2,
        title:'Sofa and 2 Chairs for Sale',
        price: '500',
        image: require('../assets/sofachairs.jpg')
    },
    {
        id:3,
        title:'Bench for Sale',
        price: '200',
        image: require('../assets/bench.jpg')
    },
    {
        id:4,
        title:'Lamp for Sale',
        price: '10',
        image: require('../assets/lamp.jpg')
    },
]
*/}

 // const [listings, setlistings] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    // const loadListings = async () => {
    //     setLoading(true);
    //     const response = await listingsApi.getListings(); 
    //     setLoading(false); 

    //     if(!response.ok) return setError(true);

    //     setError(false);
    //     setlistings(response.data);   

    //     //return {request, data, error, loading};
    // }