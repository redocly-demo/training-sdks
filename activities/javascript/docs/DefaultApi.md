# ActivitiesApiSdk.DefaultApi

All URIs are relative to *https://api.impossiblemissionsforce.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postActivities**](DefaultApi.md#postActivities) | **POST** /activities | Create a new activity



## postActivities

> postActivities(postActivitiesRequest)

Create a new activity

### Example

```javascript
import ActivitiesApiSdk from 'activities-api-sdk';
let defaultClient = ActivitiesApiSdk.ApiClient.instance;
// Configure API key authorization: IMF-KEY
let IMF-KEY = defaultClient.authentications['IMF-KEY'];
IMF-KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//IMF-KEY.apiKeyPrefix = 'Token';

let apiInstance = new ActivitiesApiSdk.DefaultApi();
let postActivitiesRequest = new ActivitiesApiSdk.PostActivitiesRequest(); // PostActivitiesRequest | 
apiInstance.postActivities(postActivitiesRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postActivitiesRequest** | [**PostActivitiesRequest**](PostActivitiesRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[IMF-KEY](../README.md#IMF-KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/problem+json

