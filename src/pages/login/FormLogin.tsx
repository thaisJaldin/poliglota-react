import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { IonContent, IonGrid, IonRow, IonCol, IonTitle, IonButton, IonLoading } from '@ionic/react';
import FormInput from '../../components/fromInput/FormInput';
import './FormLogin.css'

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .label('Email')
        .email('Caracteres inválidos')
        .required('Informe seu e-mail'),
    password: Yup.string()
        .label('Password')
        .required('Informe sua senha')
        .trim('Caracteres inválidos')
        .min(6, 'Mínimo 6 caracteres')
        .max(12, 'Máximo 12 caracteres')
})

const FormLogin = ({ handleSubmitF, goToSignupF }: any) => (
    <>

        <IonContent class="animated fadeIn login auth-login-page" style={{ padding: true }}>
            <IonGrid class="login-content">
                <IonRow justify-content-center>
                    <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                        <div className="topo">
                            <IonTitle>login</IonTitle>
                            <p style={{backgroundColor: "cornflowerblue"}}>Não possui conta? <b onClick={goToSignupF} className="clear">CADASTRE-SE</b></p>
                        </div>
                        <Formik initialValues={{ email: '', password: '' }}
                            onSubmit={values => { handleSubmitF(values) }} validationSchema={validationSchema}>{
                                ({ handleSubmit, isValid, isSubmitting }) => (

                                    <Form className="list-form">
                                        <div className="padding">
                                            <FormInput
                                                label='E-mail '
                                                name='email'
                                                placeholder='Enter email'
                                                type='text'
                                                errorName='email'
                                            />
                                            <FormInput
                                                label='Senha '
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
                                            >Login</IonButton>
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
    </>
)

export default FormLogin;