import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, TextInput, Switch } from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';

import Card from './components/Card'
import AppText from './components/AppText'
import AppButton from './components/AppButton'
import ListingDetailsScreen from './screens/ListingDetailsScreen'
import Screen from './components/Screen';
import MessageScreen from './screens/MessageScreen'
import AccountScreen from './screens/AccountScreen'
import Icon from './components/Icon'
import ListItem from './components/lists/ListItem'
import colors from './config/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListingsScreen from './screens/ListingsScreen';
import AppPicker from './components/AppPicker'
import AppTextInput from './components/AppTextInput';
import LoginScreen from './screens/LoginScreen';
import ListingEditScreen from './screens/ListingEditScreen';
import ImageInput from './components/ImageInput';
import ImageInputList from './components/ImageInputList';
import RegisterScreen from './screens/LoginScreen'
import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import NavigationTheme from './navigation/NavigationTheme';
import AuthContext from './auth/context';
import authStorage from './auth/storage'
import {AppLoading} from 'expo';

const Categories = [
  {label:'Furniture', value:1},
  {label:'Clothing', value:2},
  {label:'Books', value:3},
]


export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if(user) setUser(user);
  }

  if(!isReady) return <AppLoading startAsync={restoreUser} onFinish={()=> setIsReady(true)}/>
  
  return ( 
    <AuthContext.Provider value = {{user, setUser}}>
    <NavigationContainer theme={NavigationTheme} >
      { user ? <AppNavigator/> : <AuthNavigator/>} 
    </NavigationContainer>
    </AuthContext.Provider>
    
  );
}



const styles = StyleSheet.create({
  container:{
    backgroundColor:"#000",
    flex:1,
    
  }
})







{/*
  <NavigationContainer>
    <AuthNavigator/>
  </NavigationContainer>


*/}



// --3--

// 
// console.log(Dimensions.get('screen'));
// console.log("---------------------");
// console.log(useDimensions());
// console.log("---------------------");
// console.log(useDeviceOrientation());

//const {landscape} = useDeviceOrientation();

{/* <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor:'#fff',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
        

      }}>
        <View  style={{
        backgroundColor:"dodgerblue",
        width: 100,
        height: 100
        }} />

      <View  style={{
        backgroundColor:"gold",
        width: 100,
        height: 100
        }} />

      <View  style={{
        backgroundColor:"tomato",
        width: 100,
        height: 100
        }} />

        <View  style={{
        backgroundColor:"grey",
        width: 100,
        height: 100
        }} />
       


        </View>
      
    </SafeAreaView> */}
