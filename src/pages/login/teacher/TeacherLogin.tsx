
import React from 'react';
import CONSTANS from '../../../models/Constans';
import FormLogin from '../FormLogin';
import TeacherUserService from '../../../providers/teacher/TeacherUserService';
import WrapperResponse from '../../../models/WrapperResponse';
import Teacher from '../../../models/teacher/Teacher';

export default class TeacherLogin extends React.Component {
    _properties: any = {};
    constructor(props: any) {
        super(props);
        this._properties.history = props.history;
    }

    goToSignup = () => this._properties.navigation.navigate(CONSTANS.routes.student.singUpPageOne)
    handleSubmit = async (values: any) => {
        console.log("VALUESSSSSSSSSSS", values);
        if (values.email.length > 0 && values.password.length > 0) {
            await TeacherUserService.login(values.email, values.password).then(
                (result: any) => {
                    const teacher: Teacher = WrapperResponse.getResponse(result);
                    if (teacher) {

                        localStorage.setItem(CONSTANS.context.userId, teacher.teacherId);
                        this._properties.history.push("home");
                        this._properties.history.go();
                    }
                }
            );

        }
    }

    render() {
        return (
            <>
                <FormLogin
                    handleSubmitF={this.handleSubmit}
                    goToSignupF={this.goToSignup}
                />
            </>
        )
    }
}
