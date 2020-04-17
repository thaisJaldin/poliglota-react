interface WrapperErrorI {
    timestamp: string,
    status: number,
    error: string,
    message: string,
    path: string
}


interface WrapperResponseI {
    data: {
        content: {
            status: number,
            success: {
                body: any
            },
            error: {
                body: WrapperErrorI
            }   
        }
    }
}

export default class WrapperResponse {
    static getResponse(wrapper: WrapperResponseI): any {
        console.log(wrapper);
        try {
            if (wrapper.data.content.status === 200) {
                return wrapper.data.content.success.body;
            }
        } catch (error) {
            return wrapper.data;
        }
    }
}