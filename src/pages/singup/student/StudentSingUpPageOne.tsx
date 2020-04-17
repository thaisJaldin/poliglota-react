import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { IonContent, IonGrid, IonRow, IonCol, IonButton, IonLoading, IonItem, IonLabel, IonDatetime } from '@ionic/react';
import FormInput from '../../../components/formInput/FormInput';
import CONSTANS from '../../../models/Constans';
import studentLanguageService from '../../../providers/student/StudentLanguageService';
import WrapperResponse from '../../../models/WrapperResponse';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .label('Nome')
        .required('Informe seu nome')
        .min(4, 'Mínimo 4 caracteres')
        .max(30, 'Máximo 30 caracteres')
        .trim('Use apenas letras'),
    email: Yup.string()
        .label('E-mail')
        .email('Informe seu e-mail')
        .required('Endereço de e-mail inválido'),
    birthDate: Yup.date()
        .label('birthDate')
        .required('Informe a data de nascimento'),
    address: Yup.string()
        .label('address')
        .required('Informe seu endereço')
        .trim('Informe apenas letras e números'),
    cpf: Yup.string()
        .label('cpf')
        .required('Informe o CPF')
        .min(14, 'Mínimo 14 caracteres. Exemplo: 000.000.000-00')
        .max(14, 'Máximo 14 caracteres. Exemplo: 000.000.000-00')
        .trim('Informe um cpf válido'),
    password: Yup.string()
        .label('Password')
        .required('crie uma senha')
        .min(6, 'Mínimo 6 caracteres')
        .max(12, 'Máximo 12 caracteres')
})

export default class StudentSingUpPageOne extends React.Component {

    _properties: any = {};
    constructor(props: any) {
        super(props);
        this._properties.history = props.history;
    }

    goToSignup = () => this._properties.navigation.navigate(CONSTANS.routes.student.singUpPageOne)
    handleSubmit = async (values: any) => {
        console.log("valuesssss", values);
        await studentLanguageService.readAllLanguages().then(
            (result: any) => {
                if (result) {
                    values.languages = WrapperResponse.getResponse(result);
                    this._properties.history.push(CONSTANS.routes.student.singUpPageTwo, { values });
                    this._properties.history.go();
                }
            }
        );
    }

    render() {
        return (
            <>
                <IonContent class="animated fadeIn login auth-login-page" style={{ padding: true }}>
                    <IonGrid class="login-content">
                        <IonRow justify-content-center>
                            <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                                <Formik initialValues={{ name: '', email: '', birthDate: '', address: '', cpf: '', password: '' }}
                                    onSubmit={values => { this.handleSubmit(values) }} validationSchema={validationSchema}>{
                                        ({ handleSubmit, isValid, isSubmitting, values, handleChange, handleBlur }) => (

                                            <Form className="list-form">
                                                <div className="padding">
                                                    <FormInput
                                                        label='Nome '
                                                        name='name'
                                                        type='text'
                                                        errorName='name'
                                                    />
                                                    <FormInput
                                                        label='E-mail'
                                                        name='email'
                                                        placeholder='Enter email'
                                                        type='text'
                                                        errorName='email'
                                                    />
                                                    <IonItem>
                                                        <IonLabel className="floating">Data de nascimento </IonLabel>
                                                        <IonDatetime
                                                            name="birthDate"
                                                            value={values.birthDate}
                                                            class="date"
                                                            displayFormat="DD/MM/YY"
                                                            onIonChange={(birthDate) => handleChange(birthDate)}
                                                            onIonBlur={(birthDate) => handleBlur(birthDate)}
                                                        />
                                                    </IonItem>
                                                    <FormInput
                                                        label='Endereço'
                                                        name='address'
                                                        type="text"
                                                        errorName='address'
                                                    />
                                                    <FormInput
                                                        label='CPF'
                                                        name='cpf'
                                                        type="text"
                                                        errorName='cpf'
                                                    />
                                                    <FormInput
                                                        label='Crie sua senha'
                                                        name='password'
                                                        placeholder='Enter password'
                                                        type="password"
                                                        errorName='password'
                                                    />
                                                </div>
                                                <div className="btn-submit padding text-center">
                                                    <IonButton
                                                        ion-button="true"
                                                        type="submit"
                                                        className="full"
                                                        onClick={() => handleSubmit}
                                                        disabled={!isValid || isSubmitting}
                                                    //style={{margin-top: 10%}}
                                                    >Próximo</IonButton>
                                                    <IonLoading
                                                        isOpen={isSubmitting}
                                                        message={'Please wait...'}
                                                        duration={5000}
                                                    />
                                                </div>

                                            </Form>

                                        )
                                    }

                                </Formik>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                </IonContent>
            </>);
    }

}