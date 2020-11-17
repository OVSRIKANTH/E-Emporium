import React, { useState } from 'react';
import { View,StyleSheet, TouchableWithoutFeedback,Modal,Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from './AppText';
import PickerItem from './PickerItem';


function AppPicker({icon, items, placeholder, selectedItem, onSelectItem}) {
    const [modalVisible,setModalVisible] = useState(false);

    return (
        <React.Fragment>
            
        <TouchableWithoutFeedback onPress={ ()=> setModalVisible(true) }>
            <View style={styles.container}>
                { icon && <MaterialCommunityIcons name={icon} size={30} color={colors.medium} style={styles.icon} /> }
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : 
                                    <AppText style={styles.placeholder}>{placeholder}</AppText>}
                    
                    <MaterialCommunityIcons name="chevron-down" size={30} color={colors.medium}  />
            </View>
       </TouchableWithoutFeedback>

       <Modal visible={modalVisible} animationType="slide">
           
            <Button title="Close" onPress={()=> setModalVisible(false)} />
            <FlatList data={items}
                        keyExtractor = { item=>item.value }
                        renderItem = { ({item}) => <PickerItem label={item.label} 
                                        onPress= {()=> { setModalVisible(false); onSelectItem(item);} } />}

                        />
            
       </Modal>
       </React.Fragment>
    );
}

export default AppPicker;

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius:25,
        flexDirection:"row",
        width:'100%',
        padding:15,
        marginVertical:10,
        alignItems:"center"

    },
    icon:{
        marginRight:10
    },
    text:{
        flex:1,
    },
    placeholder:{
        color:colors.medium

    }
    
})