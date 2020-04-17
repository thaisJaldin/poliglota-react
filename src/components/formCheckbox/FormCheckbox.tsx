import React from 'react';
import { IonItem, IonLabel, IonCheckbox } from '@ionic/react';
import ErrorMessage from '../errorMessage/ErrorMessage';

const FormCheckbox = ({ label, name, value, handleChangeF, handleBlurF, errorName, ...rest }: any) => (

    <div className="checkbox">
        <IonItem class="options">
            <IonCheckbox
                {...rest}
                name={name}
                value={value}
                onIonChange={(value) => handleChangeF(value)}
                onIonBlur={(value) => handleBlurF(value)}
            />
            <IonLabel>{label}</IonLabel>
        </IonItem>
        <ErrorMessage name={errorName}></ErrorMessage>
    </div>
);

export default FormCheckbox;