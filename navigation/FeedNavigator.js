import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
const stack = createStackNavigator();

const FeedNavigator = () => (
    <stack.Navigator mode="modal" screenOptions={{headerShown:false}}>
        <stack.Screen name = "Listings" component={ListingsScreen} />
        <stack.Screen name = "ListingDetailsScreen" component={ListingDetailsScreen} options={{headerShown:false}}/>
    </stack.Navigator>
)

export default FeedNavigator; 