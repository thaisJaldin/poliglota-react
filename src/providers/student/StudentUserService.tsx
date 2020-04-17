import clienteProvider from '../ClientProvider';
import CONSTANS from '../../models/Constans';
import { AxiosInstance } from 'axios';

class StudentUserService {
  private _path: string = "student/";
  private _client: any = {};
  constructor() {
    this.buildClient().then((client: AxiosInstance) => {
      this._client = client;  
    });
  }

  buildClient = async (): Promise<AxiosInstance> => {
    const type: any = localStorage.getItem(CONSTANS.context.type);
    return await clienteProvider(type);
  };

  async login(email: string, password: string): Promise<any> {
    return await this._client.get(this._path + "login", {
      params: {
        email: email,
        password: password
      }
    }).catch((error: any) => {
      return error.response;
    })
  }

  async singUp(student: any): Promise<any> {
    return await this._client.post(this._path + "/registryStudent", student)
      .catch((error: any) => {
        return error.response;
      });
  }

  async update(studentId: string, student: any): Promise<any> {
    return await this._client.put(this._path + "/updateStudent/" + studentId, student)
      .catch((error: any) => {
        return error.response;
      });
  }
}

const studentUserService = new StudentUserService();

export default studentUserService;

