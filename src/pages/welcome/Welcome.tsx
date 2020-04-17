import React from 'react';
import { IonContent, IonGrid, IonRow } from '@ionic/react';
import './Welcome.css';
import CONSTANS from '../../models/Constans';

export default class Welcome extends React.Component {

    _properties:any = {};
    
    constructor(props: any) {
        super(props);
        this._properties.history = props.history;
    }

    navigateToDetails(route: string, type: string) {
        try {
            localStorage.setItem(CONSTANS.context.type, type);
            this._properties.history.push(route);
            this._properties.history.go();
        } catch (error) {
            // Error saving data
        }
    }

    render() {
        return (
            <>
                <IonContent className="auth-page" class="background" style={{ padding: true }}>
                    <IonGrid className="button-out-side">
                        <IonRow justify-content-center>
                            <div>
                                <button ion-button="true" className="button-clear button_tch"
                                    onClick={() => { this.navigateToDetails(CONSTANS.routes.teacher.login, CONSTANS.userTypes.teacher) }}>
                                    Sou Professor
                                </button>
                            </div>
                        </IonRow>
                        <IonRow justify-content-center>
                            <div>
                                <button ion-button="true" className="button_std"
                                    onClick={() => { this.navigateToDetails(CONSTANS.routes.student.login, CONSTANS.userTypes.student) }}>
                                    Sou Aluno
                                </button>
                            </div>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </>);
    }
}

