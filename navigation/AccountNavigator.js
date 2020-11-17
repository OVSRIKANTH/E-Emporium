import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import MessageScreen from '../screens/MessageScreen';
import AccountScreen from '../screens/AccountScreen';
const stack = createStackNavigator();

const AccountNavigator = () => (
    <stack.Navigator>
        <stack.Screen name = "Account" component={AccountScreen} />
        <stack.Screen name = "Messages" component={MessageScreen} options={{headerShown:false}}/>
    </stack.Navigator>
)

export default AccountNavigator;