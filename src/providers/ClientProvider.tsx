import axios from 'axios';
import CONSTANS from '../models/Constans';

const clienteProvider = (type: string) => {
  const baseURL = type !== null && type === CONSTANS.userTypes.student ? 'https://api-poliglota-student.azurewebsites.net' : 'https://api-poliglota-teacher.azurewebsites.net';
    return (
      axios.create({
        baseURL: baseURL
      })
    );
}

export default clienteProvider;
