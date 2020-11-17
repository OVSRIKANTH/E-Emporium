import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField( {name, ...otherProps} ) {

 const { setFieldTouched, setFieldValue, errors, touched, values} = useFormikContext();

    return (
        <>
                            <AppTextInput //icon="email" placeholder="E-Mail" autoCapitalize='none' autoCorrect={false}  
                            //keyboardType="email-address" textContentType="emailAddress"//onlyios 
                            onBlur = { ()=> setFieldTouched(name) }
                            onChangeText={text => setFieldValue(name, text) }
                            value= {values[name]}
                            {...otherProps}
                            />
                            <ErrorMessage error = {errors[name]} visible={touched[name]}  />
        </>
    );
}


export default AppFormField;