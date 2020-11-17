import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';


import AppForm from '../components/forms/AppForm'
import AppFormField from '../components/forms/AppFormField'
import AppFormPicker from '../components/forms/AppFormPicker'
import AppFormImagePicker from '../components/forms/AppFormImagePicker'
import SubmitButton from '../components/forms/SubmitButton';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import listingsApi from '../api/listings';
import UploadScreen from '../screens/UploadScreen';

const Categories = [
    {label:'Furniture', value:1},
    {label:'Clothing', value:2},
    {label:'Books', value:3},
  ]

  validationSchema= Yup.object().shape({
      title: Yup.string().required().label("Title"),
      price: Yup.number().required().label("Price"),
      category: Yup.object().required().nullable().label("Category"),
      description: Yup.string().label("Description"),
      images: Yup.array().min(1, "Please select atleast one image"),
  })


function ListingEditScreen(props) {
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [isUploadVIsible, setIsUploadVisible] = useState(false);
    
    const handleSubmit1 = async (listing, {resetForm}) => {
        
        setProgress(0);
        setIsUploadVisible(true);  

        const result = await listingsApi.addListing( {...listing, location}, progress => setProgress(progress) );

        setIsUploadVisible(false);

        if(!result.ok) return alert('Could not save your listing. Plz try again later.')
        resetForm();
    }
 
    return (
        <Screen style={styles.container}>
            <UploadScreen progress={progress} visible={isUploadVIsible}/>
        <AppForm  initialValues={ {title:"", price:"",category:null, description:"", images:[], } }
                  onSubmit={handleSubmit1}  
                  validationSchema={validationSchema}
        >
            <AppFormImagePicker name="images" />
            <AppFormField name="title" placeholder="Title" maxLength={255}/>
            <AppFormField name='price' placeholder="Price" maxLength={8} keyboardType="numeric"/>
            <AppFormPicker name="category" placeholder="Category" items={Categories}/>
            <AppFormField name="description" placeholder="Description" maxLength={255} multiline numberOfLines={3} />
            <SubmitButton title="POST" />

        </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        marginTop:10
    }
})
export default ListingEditScreen;