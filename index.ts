import { RnFetchApiData } from "./index.d";

class RnFetchApi {
  private static baseUrl: string = "";

  public static config(baseurl: string) {
    RnFetchApi.baseUrl = baseurl;
  }

  public static async get(endpoint: string, token?: string): Promise<any> {
    return await this.request({ urlPath: endpoint, method: "GET", token });
  }

  public static async post(
    endpoint: string,
    data: RnFetchApiData
  ): Promise<any> {
    const { token, ...postData } = data; // Exclude the 'token' property
    return await this.request({
      ...postData,
      urlPath: endpoint,
      method: "POST",
      token,
    });
  }

  public static async put(
    endpoint: string,
    data: RnFetchApiData
  ): Promise<any> {
    const { token, ...putData } = data; // Exclude the 'token' property
    return await this.request({
      ...putData,
      urlPath: endpoint,
      method: "PUT",
      token,
    });
  }

  public static async del(endpoint: string, token?: string): Promise<any> {
    return await this.request({ urlPath: endpoint, method: "DELETE", token });
  }

  private static async request(data: RnFetchApiData): Promise<any> {
    const { urlPath, method, formData, typecontent, token } = data;
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

    const requestOptions: RequestInit = {
      method,
      headers,
      body: typecontent ? (formData as FormData) : JSON.stringify(formData),
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
