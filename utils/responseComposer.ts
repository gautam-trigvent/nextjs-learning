interface ResponseDataInterface {
    status: 'success' | 'failure';
    error: boolean;
    message: string;
    data?: Record<string, any> | Record<string, any>[];
}

export function getResponseError(message: string, httpStatus: number, data: Record<string, any> | Record<string, any>[] = {}): Response {
    const responseData: ResponseDataInterface = {
        status: httpStatus === 200 ? 'success' : 'failure',
        error: httpStatus !== 200,
        message,
        data
    };

    return Response.json(responseData, { status: httpStatus });
}
