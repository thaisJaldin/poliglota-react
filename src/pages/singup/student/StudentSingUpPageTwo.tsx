import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';
import FormSelect from '../../../components/formSelect/FormSelect';
import FormRadios from '../../../components/formRadios/FormRadios';
import FormTextArea from '../../../components/formTextArea/FormTextArea';
import FormCheckbox from '../../../components/formCheckbox/FormCheckbox';
import FormSubmitButton from '../../../components/formButton/FormSubmitButton';
import CONSTANS from '../../../models/Constans';
import StudentUserService from '../../../providers/student/StudentUserService';
import WrapperResponse from '../../../models/WrapperResponse';
import Student from '../../../models/student/Student';

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
        if (student.birthDate) {
            let date: Date  = new Date(student.birthDate);
            student.birthDate = date.getDay() + '-' + date.getMonth() + '-' + date.getUTCFullYear();
            console.log('student.birthDate', student.birthDate, date);
        }
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
        const listOptions: [{ value: string, label: string }] = [{ value: '', label: '' }];

        if (student && student.languages) {
            for (var _i = 0; _i < student.languages.length; _i++) {
                listOptions.push({ value: student.languages[_i].languageId, label: student.languages[_i].language })
            }
            return listOptions;
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
                                                    <FormSelect
                                                        name="laguague"
                                                        value={values.laguague}
                                                        placeholder="Escolha um idioma"
                                                        handleChangeF={handleChange}
                                                        handleBlurF={handleBlur}
                                                        errorName="laguague"
                                                        selectOptions={this.selectItems()}
                                                    />
                                                    <FormRadios
                                                        name="goal"
                                                        value={values.goal}
                                                        handleChangeF={handleChange}
                                                        listHeaderLabel="Qual seu objetivo com as aulas?"
                                                        errorName="goal"
                                                        radioOptions={[{ value: "viajar", label: "Viajar" },
                                                        { value: "trabalho", label: "Fazer reuniões no trabalho" },
                                                        { value: "idioma", label: "Manutenção do idioma" }]}
                                                    />
                                                    <FormTextArea
                                                        label="Escreva uma mini biografia"
                                                        name="biography"
                                                        rows={5}
                                                        placeholder="escreva algo sobre você"
                                                        handleChangeF={handleChange}
                                                        handleBlurF={handleBlur}
                                                        errorName="biography"
                                                    />

                                                    <FormCheckbox
                                                        label="Aceitar termos"
                                                        name='terms'
                                                        value={values.terms}
                                                        handleChangeF={handleChange}
                                                        handleBlurF={handleBlur}
                                                        errorName="terms"
                                                    />
                                                </div>
                                                <FormSubmitButton
                                                    label="Cadastrar"
                                                    type="submit"
                                                    handleSubmitF={handleSubmit}
                                                    disabled={!isValid || isSubmitting}
                                                    isOpen={isSubmitting}
                                                    message={'Please wait...'}
                                                    duration={5000}
                                                />
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