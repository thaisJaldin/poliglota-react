import React from 'react';
import { IonItem, IonRadioGroup, IonListHeader, IonLabel, IonRadio } from '@ionic/react';
import ErrorMessage from '../errorMessage/ErrorMessage';

const radioItems = (items: [{ value: string, label: string }]) => {
    if (items) {
        return (items.map((item: { value: string, label: string }, index: number) => {
            return (
                <IonItem key={index} class="options">
                    <IonLabel>{item.label}</IonLabel>
                    <IonRadio value={item.value}></IonRadio>
                </IonItem>
            );
        }));
    }
}

const FormRadios = ({ name, value, listHeaderLabel, handleChangeF, radioOptions, errorName, ...rest }: any) => (

    <>
    <IonRadioGroup
        {...rest}
        name={name}
        value={value}
        onIonChange={(value) => handleChangeF(value)}
    >
        <IonListHeader class="question">{listHeaderLabel}</IonListHeader>
        {radioItems(radioOptions)}
    </IonRadioGroup>
    <ErrorMessage name={errorName}/>
    </>

);

export default FormRadios;