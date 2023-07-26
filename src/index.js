"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
class RnFetchApi {
    static config(baseurl) {
        RnFetchApi.baseUrl = baseurl;
    }
    static get(endpoint, token, customHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request({
                urlPath: endpoint,
                method: "GET",
                token,
                customHeaders,
            });
        });
    }
    static post(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, customHeaders } = data, postData = __rest(data, ["token", "customHeaders"]); // Exclude the 'token' and 'customHeaders' properties
            return yield this.request(Object.assign(Object.assign({}, postData), { urlPath: endpoint, method: "POST", token,
                customHeaders }));
        });
    }
    static put(endpoint, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token, customHeaders } = data, putData = __rest(data, ["token", "customHeaders"]); // Exclude the 'token' and 'customHeaders' properties
            return yield this.request(Object.assign(Object.assign({}, putData), { urlPath: endpoint, method: "PUT", token,
                customHeaders }));
        });
    }
    static del(endpoint, token, customHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.request({
                urlPath: endpoint,
                method: "DELETE",
                token,
                customHeaders,
            });
        });
    }
    static request(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { urlPath, method, formData, typecontent, token, customHeaders } = data;
            const url = `${RnFetchApi.baseUrl}${urlPath || ""}`;
            const headers = new Headers();
            headers.append("Accept", "application/json");
            headers.append("Content-Type", typecontent ? "multipart/form-data" : "application/json");
            if (token) {
                headers.append("Authorization", `Bearer ${token}`);
            }
            if (customHeaders) {
                for (const [key, value] of Object.entries(customHeaders)) {
                    headers.append(key, value);
                }
            }
            const requestOptions = {
                method,
                headers,
                body: formData instanceof FormData
                    ? formData
                    : typecontent
                        ? formData
                        : JSON.stringify(formData),
            };
            let responseData = null;
            try {
                const response = yield fetch(url, requestOptions);
                responseData = yield response.json();
            }
            catch (error) {
                responseData = error.response
                    ? yield error.response.json()
                    : { error: "Network Error" };
            }
            return responseData;
        });
    }
}
RnFetchApi.baseUrl = "";
exports.default = RnFetchApi;
