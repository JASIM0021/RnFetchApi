"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var RnFetchApi = /** @class */ (function () {
    function RnFetchApi() {
    }
    RnFetchApi.config = function (baseurl) {
        RnFetchApi.baseUrl = baseurl;
    };
    RnFetchApi.get = function (endpoint, token, customHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request({
                            urlPath: endpoint,
                            method: "GET",
                            token: token,
                            customHeaders: customHeaders,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RnFetchApi.post = function (endpoint, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, customHeaders, postData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = data.token, customHeaders = data.customHeaders, postData = __rest(data, ["token", "customHeaders"]);
                        return [4 /*yield*/, this.request(__assign(__assign({}, postData), { urlPath: endpoint, method: "POST", token: token, customHeaders: customHeaders }))];
                    case 1: // Exclude the 'token' and 'customHeaders' properties
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RnFetchApi.put = function (endpoint, data) {
        return __awaiter(this, void 0, void 0, function () {
            var token, customHeaders, putData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = data.token, customHeaders = data.customHeaders, putData = __rest(data, ["token", "customHeaders"]);
                        return [4 /*yield*/, this.request(__assign(__assign({}, putData), { urlPath: endpoint, method: "PUT", token: token, customHeaders: customHeaders }))];
                    case 1: // Exclude the 'token' and 'customHeaders' properties
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RnFetchApi.del = function (endpoint, token, customHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.request({
                            urlPath: endpoint,
                            method: "DELETE",
                            token: token,
                            customHeaders: customHeaders,
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RnFetchApi.request = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var urlPath, method, formData, typecontent, token, customHeaders, url, headers, _i, _a, _b, key, value, requestOptions, responseData, response, error_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        urlPath = data.urlPath, method = data.method, formData = data.formData, typecontent = data.typecontent, token = data.token, customHeaders = data.customHeaders;
                        url = "".concat(RnFetchApi.baseUrl).concat(urlPath || "");
                        headers = new Headers();
                        headers.append("Accept", "application/json");
                        headers.append("Content-Type", typecontent ? "multipart/form-data" : "application/json");
                        if (token) {
                            headers.append("Authorization", "Bearer ".concat(token));
                        }
                        if (customHeaders) {
                            for (_i = 0, _a = Object.entries(customHeaders); _i < _a.length; _i++) {
                                _b = _a[_i], key = _b[0], value = _b[1];
                                headers.append(key, value);
                            }
                        }
                        requestOptions = {
                            method: method,
                            headers: headers,
                            body: formData instanceof FormData
                                ? formData
                                : typecontent
                                    ? formData
                                    : JSON.stringify(formData),
                        };
                        responseData = null;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 4, , 8]);
                        return [4 /*yield*/, fetch(url, requestOptions)];
                    case 2:
                        response = _d.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        responseData = _d.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        error_1 = _d.sent();
                        if (!error_1.response) return [3 /*break*/, 6];
                        return [4 /*yield*/, error_1.response.json()];
                    case 5:
                        _c = _d.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        _c = { error: "Network Error" };
                        _d.label = 7;
                    case 7:
                        responseData = _c;
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/, responseData];
                }
            });
        });
    };
    RnFetchApi.baseUrl = "";
    return RnFetchApi;
}());
exports.default = RnFetchApi;
