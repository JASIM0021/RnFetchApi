interface RnFetchApiData {
    urlPath?: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    formData?: Record<string, unknown> | FormData | string | undefined;
    typecontent?: boolean;
    token?: string;
    customHeaders?: HeadersInit;
}
declare class RnFetchApi {
    private static baseUrl;
    static config(baseurl: string): void;
    static get(endpoint: string, token?: string, customHeaders?: HeadersInit): Promise<any>;
    static post(endpoint: string, data: RnFetchApiData): Promise<any>;
    static put(endpoint: string, data: RnFetchApiData): Promise<any>;
    static del(endpoint: string, token?: string, customHeaders?: HeadersInit): Promise<any>;
    private static request;
}
export default RnFetchApi;
