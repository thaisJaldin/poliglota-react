import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
    IonContent, IonGrid, IonRow, IonCol, IonButton, IonLoading,
    IonItem, IonSelect, IonSelectOption, IonRadioGroup, IonListHeader,
    IonLabel, IonRadio, IonTextarea, IonCheckbox
} from '@ionic/react';
import ErrorMessage from '../../../components/errorMessage/ErrorMessage';
import CONSTANS from '../../../models/Constans';
import StudentUserService from '../../../providers/student/StudentUserService';
import WrapperResponse from '../../../models/WrapperResponse';
import Student from '../../../models/student/Student';
import Language from '../../../models/Language';

const validationSchema = Yup.object().shape({
    laguague: Yup.string()
        .label('Language')
        .required('Informe a linguagem')
        .trim('Informe a linguagem'),
    biography: Yup.string()
        .label('Biography')
        .required('Informe sua bibliografia')
        .min(20, 'Mínimo 20 caracteres')
        .max(300, 'Máximo 300 caracteres')
        .trim('Use apenas letras e números'),
    goal: Yup.string()
        .label('Goal')
        .trim('Informe seu Goal'),
    terms: Yup.string()
        .trim('Deve Aceitaro os Termos')
})

export default class StudentSingUpPageTwo extends React.Component {

    _properties: any = {};
    constructor(props: any) {
        super(props);
        this._properties.history = props.history;
    }

    goToSignup = () => this._properties.navigation.navigate(CONSTANS.routes.student.singUpPageOne)
    handleSubmit = async (values: any) => {
        const student: Student = this._properties.history.location.state.values;
        student.languages = [values.laguague];
        student.goal = values.goal;
        student.biography = values.biography;
        console.log("student", student);
        await StudentUserService.singUp(student).then(
            (result: any) => {
                if (result) {
                    const studentRegister: Student = WrapperResponse.getResponse(result);
                    localStorage.setItem(CONSTANS.context.userId, studentRegister.studentId);
                    localStorage.setItem(CONSTANS.context.languges, JSON.stringify(studentRegister.languages));
                    this._properties.history.push(CONSTANS.routes.student.home);
                    this._properties.history.go();
                }
            }
        );
    }

    selectItems = () => {
        const student: Student = this._properties.history.location.state.values;
        if (student && student.languages) {
            return (student.languages.map((lng: Language, index: number) => {
                return <IonSelectOption key={index} value={lng.languageId}>{lng.language}</IonSelectOption>
            }));
        }
    }

    render() {
        return (
            <>
                <IonContent class="animated fadeIn login auth-login-page" style={{ padding: true }}>
                    <IonGrid class="login-content">
                        <IonRow justify-content-center>
                            <IonCol align-self-center size-md="6" size-lg="5" size-xs="12">
                                <Formik initialValues={{ laguague: '', goal: '', biography: '', terms: '' }}
                                    onSubmit={values => { this.handleSubmit(values) }} validationSchema={validationSchema}>{
                                        ({ handleSubmit, isValid, isSubmitting, values, handleChange, handleBlur }) => (

                                            <Form className="list-form">
                                                <div className="padding">
                                                    <IonItem>
                                                        <IonSelect
                                                            name="laguague"
                                                            value={values.laguague}
                                                            placeholder="Escolha um idioma"
                                                            onIonChange={(laguague) => handleChange(laguague)}
                                                            onIonBlur={(laguague) => handleBlur(laguague)}
                                                        >
                                                            {this.selectItems()}
                                                        </IonSelect>
                                                        <ErrorMessage name="laguague"></ErrorMessage>
                                                    </IonItem>
                                                    <IonRadioGroup
                                                        name="goal"
                                                        value={values.goal}
                                                        onIonChange={(goal) => handleChange(goal)}
                                                    >

                                                        <IonListHeader class="question">Qual seu objetivo com as aulas?</IonListHeader>

                                                        <IonItem class="options">
                                                            <IonLabel>Viajar</IonLabel>
                                                            <IonRadio value="viajar"></IonRadio>
                                                        </IonItem>

                                                        <IonItem class="options">
                                                            <IonLabel>Fazer reuniões no trabalho</IonLabel>
                                                            <IonRadio value="trabalho"></IonRadio>
                                                        </IonItem>

                                                        <IonItem class="options">
                                                            <IonLabel>Manutenção do idioma</IonLabel>
                                                            <IonRadio value="idioma"></IonRadio>
                                                        </IonItem>
                                                        <ErrorMessage name="goal"></ErrorMessage>
                                                    </IonRadioGroup>
                                                    <IonItem class="options">
                                                        <IonLabel>Escreva uma mini biografia</IonLabel>
                                                        <IonTextarea
                                                            name="biography"
                                                            rows={5}
                                                            placeholder="escreva algo sobre você"
                                                            onIonChange={(biography) => handleChange(biography)}
                                                            onIonBlur={(biography) => handleBlur(biography)}
                                                        />
                                                        <ErrorMessage name="biography"></ErrorMessage>
                                                    </IonItem>
                                                    <div className="checkbox">
                                                        <IonLabel>Aceitar termos</IonLabel>
                                                        <IonCheckbox
                                                            name='terms'
                                                            value= {values.terms}
                                                            onIonChange={(terms) => {handleChange(terms); console.log("terms", terms)}}
                                                            onIonBlur={(terms) => handleBlur(terms)}
                                                        />
                                                        <ErrorMessage name="terms"></ErrorMessage>
                                                    </div>
                                                </div>
                                                <div className="btn-submit padding text-center">
                                                    <IonButton
                                                        ion-button="true"
                                                        type="submit"
                                                        className="full"
                                                        onClick={() => handleSubmit}
                                                        disabled={!isValid || isSubmitting}
                                                    //style={{margin-top: 10%}}
                                                    >Cadastrar</IonButton>
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