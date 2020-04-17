import React from 'react';
import { IonItem, IonLabel, IonTextarea } from '@ionic/react';
import ErrorMessage from '../errorMessage/ErrorMessage';

const FormTextArea = ({ label, name, value, placeholder, handleChangeF, handleBlurF, errorName, ...rest }: any) => (

    <>
        <IonItem class="options">
            <IonLabel>{label}</IonLabel>
            <IonTextarea
                {...rest}
                name={name}
                rows={5}
                placeholder={placeholder}
                onIonChange={(value) => handleChangeF(value)}
                onIonBlur={(value) => handleBlurF(value)}
            />
        </IonItem>
        <ErrorMessage name={errorName} />
    </>
);

export default FormTextArea;