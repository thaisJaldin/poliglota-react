import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import CONSTANS from './models/Constans';

import Welcome from './pages/welcome/Welcome';
/**
 * Strudent routers
*/
import StudentLogin from './pages/login/student/StudentLogin';
import StudentSingUpPageOne from './pages/singup/student/StudentSingUpPageOne';
import StudentSingUpPageTwo from './pages/singup/student/StudentSingUpPageTwo';
import TeacherLogin from './pages/login/teacher/TeacherLogin';

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path={CONSTANS.routes.welcome} component={Welcome} />
        <Redirect exact from="/" to={CONSTANS.routes.welcome} />
        <Route path={CONSTANS.routes.student.login} component={StudentLogin} />
        <Route path={CONSTANS.routes.student.singUpPageOne} component={StudentSingUpPageOne} />
        <Route path={CONSTANS.routes.student.singUpPageTwo} component={StudentSingUpPageTwo} />
        <Route path={CONSTANS.routes.teacher.login} component={TeacherLogin} />
      </IonRouterOutlet>
    </IonReactRouter>

  );
};

export default Routes;