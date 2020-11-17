import React,{useState} from 'react';
import {  } from 'react-native';

import Screen from './Screen'

function Switch(props) {
    const [isNew,setIsNew] = useState(false);

    return ( 
     
          <Screen>
            <Switch value={isNew} onValueChange={(newValue)=> setIsNew(newValue)}/>
          </Screen>
     
    );
}

export default Switch;