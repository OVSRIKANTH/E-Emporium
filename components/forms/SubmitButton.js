import React from 'react';
import {useFormikContext} from 'formik';

import AppButton from '../AppButton'

function SubmitButton({title, style}) {
 const {handleSubmit} = useFormikContext();
    return (
    <AppButton style={style} onPress={handleSubmit} > {title} </AppButton>

    );
}


export default SubmitButton;