import React from 'react';
import { ErrorMessage as FormikError } from 'formik';
import './ErrorMessage.css';

const ErrorMessage = ({ name }: any) => (
    <FormikError component="span" name={name} className='errorText'/>
)

export default ErrorMessage;
