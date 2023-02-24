# ScoresApi.ScoresApi

All URIs are relative to *https://api.impossiblemissionsforce.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listScores**](ScoresApi.md#listScores) | **GET** /scores | Get all scores



## listScores

> [USERGRADE] listScores(IMF_KEY, opts)

Get all scores

### Example

```javascript
import ScoresApi from 'scores_api';

let apiInstance = new ScoresApi.ScoresApi();
let IMF_KEY = "IMF_KEY_example"; // String | API KEY
let opts = {
  'user': "user_example", // String | Name of user
  'quiz': "quiz_example" // String | Quiz name
};
apiInstance.listScores(IMF_KEY, opts, (error, data, response) => {
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
 **IMF_KEY** | **String**| API KEY | 
 **user** | **String**| Name of user | [optional] 
 **quiz** | **String**| Quiz name | [optional] 

### Return type

[**[USERGRADE]**](USERGRADE.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

