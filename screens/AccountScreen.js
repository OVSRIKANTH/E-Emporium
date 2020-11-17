import React, { useContext } from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors'
import Screen from '../components/Screen'
import Icon from '../components/Icon'
import ListItemSeperator from '../components/lists/ListItemSeperator';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage'

const menuItems=[
    {title:'My Listings',
    icon:   {name:'format-list-bulleted',
            backgroundColor:colors.primary}
    },
    {title:'My Messages',
    icon:   {name:'email',
            backgroundColor:colors.secondry},
    targetScreen: "Messages"
    }
]



function AccountScreen({navigation}) {
    const authContext = useContext(AuthContext);
    const handlelogout = () => {
        authContext.setUser(null);
        authStorage.removeToken()
    }
    return (
                
        <Screen style={{backgroundColor:'#f4f4f4'}}>
            <View style={styles.container}>
                <ListItem title={authContext.user.name} subtitle={authContext.user.email} image={require('../assets/man0.jpeg')} />
            </View>
            <View style={styles.container}>
                <FlatList data = {menuItems} 
                            keyExtractor ={ menuItem => menuItem.title}
                            renderItem={({item}) => <ListItem title = {item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>} onPress={()=>navigation.navigate(item.targetScreen)} />  }
                            ItemSeparatorComponent={ListItemSeperator}
                />
            </View>

            <ListItem title='Logout' IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />} onPress={handlelogout} />
          


        </Screen>
        
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container:{
            marginBottom:40,
           
    }
})