import React from 'react';
import {useState} from 'react';
import { FlatList,View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemSeperator from '../components/lists/ListItemSeperator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id:1,
        title:'Steve',
        description:"Is this product still available?",
        image: require('../assets/manc.jpg')
    },
    {
        id:2,
        title:'Tony',
        description:"What is the model no for your camera?",
        image: require('../assets/mann.jpg')
    },
    // {
    //     id:3,
    //     title:'T3T3T3T3T3',
    //     description:"D3D3D3",
    //     image: require('../assets/doom.jpg')
    // },{
    //     id:4,
    //     title:'T4T4T4T4T4',
    //     description:"D1D1D1",
    //     image: require('../assets/apple_logo.jpg')
    // },
    // {
    //     id:5,
    //     title:'T5T5T5T5T5',
    //     description:"D5D5D5",
    //     image: require('../assets/einstein2.jpg')
    // },
    // {
    //     id:6,
    //     title:'T6T6T6T6T6',
    //     description:"D6D6D6",
    //     image: require('../assets/ListItem_photo.jpg')
    // },{
    //     id:7,
    //     title:'T7T7T7T7T7',
    //     description:"D7D7D7",
    //     image: require('../assets/Skull.jpg')
    // },
    // {
    //     id:8,
    //     title:'T8T8T8T8T8',
    //     description:"D8D8D8",
    //     image: require('../assets/einstein1.jpg')
    // },
    // {
    //     id:9,
    //     title:'T3T3T3T3T3',
    //     description:"D3D3D3",
    //     image: require('../assets/doom.jpg')
    // },{
    //     id:10,
    //     title:'T1T1T1T1T1',
    //     description:"D1D1D1",
    //     image: require('../assets/Skull.jpg')
    // },
    {
        id:11,
        title:"lily",
        description:"I'm interested in this item. Do you provide free delivery?",
        image: require('../assets/man6.jpg')
    },
    {
        id:12,
        title:'steve',
        description:"Your product was wonderful.Thanks!!",
        image: require('../assets/manc.jpg')
    }
]


function MessageScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);

    const handleDelete = message =>{
        const newMessages = messages.filter(m => message.id !== m.id)            // 1 Delete the message from server. 2 Call the server. 
        setMessages(newMessages);
        
    }

    return (
        <Screen>

            <FlatList data = {messages}
                keyExtractor= { (message)=>  message.id.toString() }
                renderItem=   { ({item}) => <ListItem title ={item.title} subtitle={item.description} image={item.image} 
                                                        onPress={()=>console.log('Message selected',item.title)}
                                                        renderRightActions={()=><ListItemDeleteAction onPress={()=>handleDelete(item)}/>}
                                                        /> }
                ItemSeparatorComponent= {()=><ListItemSeperator />}     // or {ListItemSeperator}
                refreshing={refreshing}
                onRefresh=   {   ()=>               //this is where we are going to call backend to retrive new msgs(updating)
                                        setMessages([{
                                            id:5,
                                            title:'T5T5T5T5T5',
                                            description:"D5D5D5",
                                            image: require('../assets/mann.jpg')
                                        },

                                        ])
                }
            
            />

        </Screen>
    );
}

export default MessageScreen;














//{()=> <View style={{width:'100%', height:1,backgroundColor:'#000'}}/>}  // we can import from ListItemSeperator
            