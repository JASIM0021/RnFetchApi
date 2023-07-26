

## RnFetchApi

RnFetchApi is a simple utility for making API calls using the `fetch` function in React Native. It provides easy-to-use shorthand methods for common HTTP methods such as GET, POST, PUT, and DELETE, and allows you to configure a base URL for your API requests.

### Installation

You can install the `rnfetchapi` package via npm:

```bash
npm install rnfetchapi
```

### Usage

To use the `RnFetchApi` in your React Native project, import it as follows:

```javascript
import RnFetchApi from 'rnfetchapi';
```

#### Configuration

Before making any API calls, you can configure a base URL by calling the `config` method:

```javascript
RnFetchApi.config("https://api.example.com/");
```

#### Making API Calls

##### GET Request

To make a GET request, use the `get` method:

```javascript
RnFetchApi.get("someendpoint", "your_access_token_here")
  .then((response) => {
    // Handle the response
    console.log(response);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });
```

##### POST Request

To make a POST request, use the `post` method:

```javascript
const postData = {
  
  formData: { key: "value" },
  typecontent: false,
  token: "your_access_token_here",
};

RnFetchApi.post("someendpoint", postData)
  .then((response) => {
    // Handle the response
    console.log(response);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });
```

##### PUT Request

To make a PUT request, use the `put` method:

```javascript
const putData = {
 
  formData: { key: "updated_value" },
  typecontent: false,
  token: "your_access_token_here",
};

RnFetchApi.put("someendpoint", putData)
  .then((response) => {
    // Handle the response
    console.log(response);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });
```

##### DELETE Request

To make a DELETE request, use the `del` method:

```javascript
RnFetchApi.del("someendpoint", "your_access_token_here")
  .then((response) => {
    // Handle the response
    console.log(response);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });
```
##### CUSTOM HEADER
 when making a GET request (or any other API call), you can include custom headers in the customHeaders object to send them along with the request. This provides flexibility for users to add any additional headers they might need for specific API calls.

 ```javascript
 const customHeaders = {
  "X-Custom-Header": "Custom Value",
  "Authorization": "Custom Token",
};

RnFetchApi.get("someendpoint", "your_access_token_here", customHeaders)
  .then((response) => {
    // Handle the response
    console.log(response);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  });

 
 ```
 As shown in the code above, you can pass the customHeaders object as the third parameter to the post, put, and del methods to include any custom headers you want in the request. This allows you to send additional information, such as authentication tokens or any other headers required by the API endpoint.
### License

This package is open-source and available under the [MIT License](LICENSE).

### Contribution

Contributions are welcome! If you find any bugs or want to suggest improvements, please feel free to create an issue or submit a pull request.

### Summary

`RnFetchApi` simplifies making API calls in React Native using the `fetch` function. It provides a straightforward way to handle common HTTP methods and offers a convenient configuration to set a base URL for API requests. It is a reliable and easy-to-use fetch utility, making it an ideal choice for API calls in your React Native projects.