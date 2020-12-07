import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
//192.168.1.6
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
