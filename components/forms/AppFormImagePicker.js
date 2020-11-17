import React from 'react';  
import {useFormikContext} from 'formik';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function AppFormImagePicker({ name }) {
    const {setFieldValue, touched, errors, values} = useFormikContext();
    const imageUris = values[name];
    
    const handleAdd = (uri) => {setFieldValue( name, [...imageUris, uri] ); console.log("Added")};

    const handleRemove = uri =>  {setFieldValue(name, imageUris.filter( imageuri => imageuri !== uri )); };
    
    return (
        <>
            <ImageInputList  imageUris={imageUris} onRemoveImage = {handleRemove} onAddImage={handleAdd}/>
            <ErrorMessage error = {errors[name]} visible={touched[name]}  />
        </>
      
    );
}


export default AppFormImagePicker;

