import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './navigation/AuthNavigator';
import AppNavigator from './navigation/AppNavigator';
import NavigationTheme from './navigation/NavigationTheme';
import AuthContext from './auth/context';
import authStorage from './auth/storage'
import {AppLoading} from 'expo';


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

