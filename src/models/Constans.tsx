const CONSTANS = {
    userTypes: {
        student: "STUDENT",
        teacher: "TEACHER"
    },
    context: {
        type: "TYPE",
        userId: "USERID",
        languges:"LANGUAGES"
    },
    routes: {
        welcome: "/welcome",
        student: {
            login: "/studentLogin",
            singUpPageOne: "/studentSingupOne",
            singUpPageTwo: "/studentSingupTwo",
            home:"/studentHome"
        },
        teacher: {
            login: "/teacherLogin"
        }
    }

};

export default CONSTANS;