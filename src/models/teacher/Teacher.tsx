import {Document} from './Document';

export default interface Teacher {
  teacherId: string;
  address: string;
  biography: string;
  cpf: string;
  documents: Document [];
  email: string;
  languagesIds: string [];
  level: string;
  linkVideo: string;
  name: string;
  password: string;
  phone: string;
  status: string;
}
