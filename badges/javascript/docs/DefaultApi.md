# Badges.DefaultApi

All URIs are relative to *https://api.impossiblemissionsforce.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBadge**](DefaultApi.md#getBadge) | **GET** /badges | Get badges
[**postBadges**](DefaultApi.md#postBadges) | **POST** /badges | Create a badge



## getBadge

> [Badge] getBadge()

Get badges

### Example

```javascript
import Badges from 'badges';
let defaultClient = Badges.ApiClient.instance;
// Configure API key authorization: IMF-KEY
let IMF-KEY = defaultClient.authentications['IMF-KEY'];
IMF-KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//IMF-KEY.apiKeyPrefix = 'Token';

let apiInstance = new Badges.DefaultApi();
apiInstance.getBadge((error, data, response) => {
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

[**[Badge]**](Badge.md)

### Authorization

[IMF-KEY](../README.md#IMF-KEY)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## postBadges

> Badge postBadges(postBadgesRequest)

Create a badge

### Example

```javascript
import Badges from 'badges';
let defaultClient = Badges.ApiClient.instance;
// Configure API key authorization: IMF-KEY
let IMF-KEY = defaultClient.authentications['IMF-KEY'];
IMF-KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//IMF-KEY.apiKeyPrefix = 'Token';

let apiInstance = new Badges.DefaultApi();
let postBadgesRequest = new Badges.PostBadgesRequest(); // PostBadgesRequest | Badge definition with icon and requirements.
apiInstance.postBadges(postBadgesRequest, (error, data, response) => {
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
 **postBadgesRequest** | [**PostBadgesRequest**](PostBadgesRequest.md)| Badge definition with icon and requirements. | 

### Return type

[**Badge**](Badge.md)

### Authorization

[IMF-KEY](../README.md#IMF-KEY)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/problem+json

