# Assignments.DefaultApi

All URIs are relative to *http://api.impossiblemissionsforce.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssignment**](DefaultApi.md#createAssignment) | **POST** /assignments | Create assignment
[**getAssignets**](DefaultApi.md#getAssignets) | **GET** /assignments | Get assignments



## createAssignment

> Assignment createAssignment(opts)

Create assignment

Assign quiz or checklist to user.

### Example

```javascript
import Assignments from 'assignments';
let defaultClient = Assignments.ApiClient.instance;
// Configure API key authorization: IMF-KEY
let IMF-KEY = defaultClient.authentications['IMF-KEY'];
IMF-KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//IMF-KEY.apiKeyPrefix = 'Token';

let apiInstance = new Assignments.DefaultApi();
let opts = {
  'createAssignmentRequest': new Assignments.CreateAssignmentRequest() // CreateAssignmentRequest | 
};
apiInstance.createAssignment(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAssignmentRequest** | [**CreateAssignmentRequest**](CreateAssignmentRequest.md)|  | [optional] 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[IMF-KEY](../README.md#IMF-KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json


## getAssignets

> [Assignment] getAssignets()

Get assignments

Get all assignments.

### Example

```javascript
import Assignments from 'assignments';
let defaultClient = Assignments.ApiClient.instance;
// Configure API key authorization: IMF-KEY
let IMF-KEY = defaultClient.authentications['IMF-KEY'];
IMF-KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//IMF-KEY.apiKeyPrefix = 'Token';

let apiInstance = new Assignments.DefaultApi();
apiInstance.getAssignets((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Assignment]**](Assignment.md)

### Authorization

[IMF-KEY](../README.md#IMF-KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

