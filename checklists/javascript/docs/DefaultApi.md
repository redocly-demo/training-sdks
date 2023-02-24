# ChecklistsApiSdk.DefaultApi

All URIs are relative to *https://api.impossiblemissionsforce.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChecklist**](DefaultApi.md#createChecklist) | **POST** /checklists | Create Checklist
[**getCheckLists**](DefaultApi.md#getCheckLists) | **GET** /checklists | Get Checklists



## createChecklist

> CreateChecklist201Response createChecklist(opts)

Create Checklist

Create checklist.

### Example

```javascript
import ChecklistsApiSdk from 'checklists-api-sdk';
let defaultClient = ChecklistsApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ChecklistsApiSdk.DefaultApi();
let opts = {
  'createChecklistRequest': new ChecklistsApiSdk.CreateChecklistRequest() // CreateChecklistRequest | 
};
apiInstance.createChecklist(opts, (error, data, response) => {
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
 **createChecklistRequest** | [**CreateChecklistRequest**](CreateChecklistRequest.md)|  | [optional] 

### Return type

[**CreateChecklist201Response**](CreateChecklist201Response.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json, application/json


## getCheckLists

> Object getCheckLists()

Get Checklists

Get the list of checklists.

### Example

```javascript
import ChecklistsApiSdk from 'checklists-api-sdk';
let defaultClient = ChecklistsApiSdk.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
let ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

let apiInstance = new ChecklistsApiSdk.DefaultApi();
apiInstance.getCheckLists((error, data, response) => {
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

**Object**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/problem+json, application/json

