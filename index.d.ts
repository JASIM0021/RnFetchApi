export interface RnFetchApiData {
  urlPath?: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  formData?: Record<string, unknown> | FormData | string | undefined;
  typecontent?: boolean;
  token?: string;
}
