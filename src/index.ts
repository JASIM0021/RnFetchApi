interface RnFetchApiData {
  urlPath?: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  formData?: Record<string, unknown> | FormData | string | undefined;
  typecontent?: boolean;
  token?: string;
  customHeaders?: HeadersInit;
}

class RnFetchApi {
  private static baseUrl: string = "";

  public static config(baseurl: string) {
    RnFetchApi.baseUrl = baseurl;
  }

  public static async get(
    endpoint: string,
    token?: string,
    customHeaders?: HeadersInit
  ): Promise<any> {
    return await this.request({
      urlPath: endpoint,
      method: "GET",
      token,
      customHeaders,
    });
  }

  public static async post(
    endpoint: string,
    data: RnFetchApiData
  ): Promise<any> {
    const { token, customHeaders, ...postData } = data; // Exclude the 'token' and 'customHeaders' properties
    return await this.request({
      ...postData,
      urlPath: endpoint,
      method: "POST",
      token,
      customHeaders,
    });
  }

  public static async put(
    endpoint: string,
    data: RnFetchApiData
  ): Promise<any> {
    const { token, customHeaders, ...putData } = data; // Exclude the 'token' and 'customHeaders' properties
    return await this.request({
      ...putData,
      urlPath: endpoint,
      method: "PUT",
      token,
      customHeaders,
    });
  }

  public static async del(
    endpoint: string,
    token?: string,
    customHeaders?: HeadersInit
  ): Promise<any> {
    return await this.request({
      urlPath: endpoint,
      method: "DELETE",
      token,
      customHeaders,
    });
  }

  private static async request(data: RnFetchApiData): Promise<any> {
    const { urlPath, method, formData, typecontent, token, customHeaders } =
      data;
    const url = `${RnFetchApi.baseUrl}${urlPath || ""}`;

    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append(
      "Content-Type",
      typecontent ? "multipart/form-data" : "application/json"
    );

    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }

    if (customHeaders) {
      for (const [key, value] of Object.entries(customHeaders)) {
        headers.append(key, value);
      }
    }

    const requestOptions: RequestInit = {
      method,
      headers,
      body:
        formData instanceof FormData
          ? formData
          : typecontent
          ? (formData as FormData)
          : JSON.stringify(formData),
    };

    let responseData = null;

    try {
      const response = await fetch(url, requestOptions);
      responseData = await response.json();
    } catch (error) {
      responseData = error.response
        ? await error.response.json()
        : { error: "Network Error" };
    }

    return responseData;
  }
}

export default RnFetchApi;
