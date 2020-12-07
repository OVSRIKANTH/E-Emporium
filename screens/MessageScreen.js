import React from 'react';
import {useState} from 'react';
import { FlatList,View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemSeperator from '../components/lists/ListItemSeperator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'
import Screen from '../components/Screen'
import messageApi from '../api/messages'
import authStorage from '../auth/storage';

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
    {
        id:11,
        title:"Lily",
        description:"I'm interested in this item. Do you provide free delivery?",
        image: require('../assets/man6.jpg')
    },
    {
        id:12,
        title:'Steve',
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

      const handleRefresh = async () => {
        const user = await authStorage.getUser();
        const result = await messageApi.getMessages(user);
        

        if(result.ok) {
            //setMessages(result.data);
            const Messages = result.data;
            const final = Messages.map((msg,index)=>{
                                                if(index%3===0)  msg={...msg, image:require(`../assets/man0.jpg`)}; 
                                                else if(index%3===1)  msg={...msg, image:require(`../assets/man1.jpg`)};
                                                else  msg={...msg, image:require(`../assets/man2.jpg`)};                                        
                                                return msg; })
            setMessages(final);
            console.log(final);}
        else console.log(result);
        
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
                onRefresh=   {   ()=>   handleRefresh()            //this is where we are going to call backend to retrive new msgs(updating)
               
                }
            
            />

        </Screen>
    );
}

export default MessageScreen;














//{()=> <View style={{width:'100%', height:1,backgroundColor:'#000'}}/>}  // we can import from ListItemSeperator
            