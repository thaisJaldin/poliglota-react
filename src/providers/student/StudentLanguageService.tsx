import clienteProvider from '../ClientProvider';
import CONSTANS from '../../models/Constans';
import { AxiosInstance } from 'axios';

class StudentLanguageService {
    private _path: string = "student/";
    private _client: any;
    constructor() {
        this.buildClient().then((client: AxiosInstance) => {
            this._client = client;
        });
    }

    buildClient = async (): Promise<AxiosInstance> => {
        const type: any = localStorage.getItem(CONSTANS.context.type);
        return await clienteProvider(type);
    };

    async readAllLanguages(): Promise<any> {
        return await this._client.get(this._path + "language/readAllStudentLanguages")
            .catch((error: any) => {
                return error.response;
            })
    }
}
const studentLanguageService = new StudentLanguageService();

export default studentLanguageService;

