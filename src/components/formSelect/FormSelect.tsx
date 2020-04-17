import React from 'react';
import { IonItem, IonSelect, IonSelectOption } from '@ionic/react';
import ErrorMessage from '../errorMessage/ErrorMessage';

const selectItems = (items: [{ value: string, label: string }]) => {
    if (items) {
        return (items.map((item: { value: string, label: string }, index: number) => {
            return <IonSelectOption key={index} value={item.value}>{item.label}</IonSelectOption>
        }));
    }
}

const FormSelect = ({ name, value, placeholder, handleChangeF, handleBlurF, selectOptions, errorName, ...rest }: any) => (
    <>
        <IonItem>
            <IonSelect
                {...rest}
                name={name}
                value={value}
                placeholder={placeholder}
                onIonChange={(value) => handleChangeF(value)}
                onIonBlur={(value) => handleBlurF(value)}
            >
                {selectItems(selectOptions)}
            </IonSelect>
        </IonItem>
        <ErrorMessage name={errorName} />
    </>
);

export default FormSelect;