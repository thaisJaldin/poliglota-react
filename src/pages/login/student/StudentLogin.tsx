import React from 'react';
import CONSTANS from '../../../models/Constans';
import FormLogin from '../FormLogin';
import StudentUserService from '../../../providers/student/StudentUserService';
import WrapperResponse from '../../../models/WrapperResponse';
import Student from '../../../models/student/Student';

export default class StudentLogin extends React.Component {
    _properties: any = {};
    constructor(props: any) {
        super(props);
        this._properties.history = props.history;
    }

    goToSignup = () => {
        this._properties.history.push(CONSTANS.routes.student.singUpPageOne);
        this._properties.history.go(); 
    }
    handleSubmit = async (values: any) => {
        if (values.email.length > 0 && values.password.length > 0) {
            await StudentUserService.login(values.email, values.password).then(
                (result: any) => {
                    const student: Student = WrapperResponse.getResponse(result);
                    if (student) {
                        localStorage.setItem(CONSTANS.context.userId, student.studentId);
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
