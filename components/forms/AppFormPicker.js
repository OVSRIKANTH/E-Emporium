import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage'

function AppFormPicker( {items, name, placeholder} ) {
 
    const {errors, setFieldValue, values, touched} = useFormikContext();

    return (
            <>
                <AppPicker placeholder={placeholder} items={items}
                            onSelectItem={item => setFieldValue(name,item)}
                            selectedItem={values[name]}
                />

                <ErrorMessage error={errors[name]} visible={touched[name]}/>

            </>  
    );
}



export default AppFormPicker;