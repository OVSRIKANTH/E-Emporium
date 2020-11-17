import React from 'react';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import { createStackNavigator} from '@react-navigation/stack';



const stack = createStackNavigator();
const AuthNavigator = () => (
    <stack.Navigator>   
        <stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <stack.Screen name="Login" component={LoginScreen} />
        <stack.Screen name="Register" component={RegisterScreen} />
    </stack.Navigator>
)

export default AuthNavigator