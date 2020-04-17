import React from 'react';
import { Field } from 'formik';
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import ErrorMessage from '../errorMessage/ErrorMessage';

const FormInput = ({ label, name, placeholder, type, errorName }: any) => (
    <>
    <IonItem>
        <IonLabel className="floating">{label} </IonLabel>
        <IonInput>
            <Field
                name={name}
                className='native-input sc-ion-input-md'
                placeholder={placeholder}
                type={type}
            />
        </IonInput>
    </IonItem>
    <ErrorMessage name={errorName} />
    </>
);

export default FormInput;