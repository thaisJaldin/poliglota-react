import React from 'react';
import { IonButton, IonLoading } from '@ionic/react';

const FormSubmitButton = ({ label, type, handleSubmitF, disabled, isOpen, menssage, duration, ...rest }: any) => (

    <div className="btn-submit padding text-center">
        <IonButton
            {...rest}
            ion-button="true"
            type={type}
            className="full"
            onClick={() => handleSubmitF}
            disabled={disabled}
            class="button-margin"
        >{label}</IonButton>
        <IonLoading
            isOpen={isOpen}
            message={menssage}
            duration={duration}
        />
    </div>
);

export default FormSubmitButton;