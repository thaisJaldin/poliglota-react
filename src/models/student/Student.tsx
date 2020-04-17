import Language from '../Language';

export default interface Student {
  studentId: string;
  name: string;
  email: string;
  status: string;
  phone: string;
  address: string;
  level: string;
  didTest: boolean;
  biography: string;
  birthDate: string;
  cpf: string;
  goal: string;
  languages: Language [];
  password: string;
}
