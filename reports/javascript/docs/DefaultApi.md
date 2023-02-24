# ImpossibleMissionsForceReports.DefaultApi

All URIs are relative to *https://api.impossiblemissionsforce.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSummaryReports**](DefaultApi.md#getSummaryReports) | **GET** /reports/summaries | Get summary reports
[**getUserActivity**](DefaultApi.md#getUserActivity) | **GET** /users/{id} | Get activity information for a specific user
[**getUsersSummary**](DefaultApi.md#getUsersSummary) | **GET** /users | Get summary of users



## getSummaryReports

> SummaryReports getSummaryReports(IMF_KEY, startDate, endDate)

Get summary reports

Retrieves summary reports for a specific date range.

### Example

```javascript
import ImpossibleMissionsForceReports from 'impossible_missions_force_reports';

let apiInstance = new ImpossibleMissionsForceReports.DefaultApi();
let IMF_KEY = null; // Object | 
let startDate = 2023-01-01T00:00:00Z; // Object | 
let endDate = 2023-02-01T00:00:00Z; // Object | 
apiInstance.getSummaryReports(IMF_KEY, startDate, endDate, (error, data, response) => {
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
 **IMF_KEY** | [**Object**](.md)|  | 
 **startDate** | [**Object**](.md)|  | 
 **endDate** | [**Object**](.md)|  | 

### Return type

[**SummaryReports**](SummaryReports.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## getUserActivity

> UsersById getUserActivity(IMF_KEY, id)

Get activity information for a specific user

Retrieves activity information for a specific user.

### Example

```javascript
import ImpossibleMissionsForceReports from 'impossible_missions_force_reports';

let apiInstance = new ImpossibleMissionsForceReports.DefaultApi();
let IMF_KEY = null; // Object | 
let id = null; // Object | 
apiInstance.getUserActivity(IMF_KEY, id, (error, data, response) => {
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
 **IMF_KEY** | [**Object**](.md)|  | 
 **id** | [**Object**](.md)|  | 

### Return type

[**UsersById**](UsersById.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json


## getUsersSummary

> Object getUsersSummary(IMF_KEY)

Get summary of users

Retrieves summary information about all users.

### Example

```javascript
import ImpossibleMissionsForceReports from 'impossible_missions_force_reports';

let apiInstance = new ImpossibleMissionsForceReports.DefaultApi();
let IMF_KEY = null; // Object | API key for accessing the IMF API.
apiInstance.getUsersSummary(IMF_KEY, (error, data, response) => {
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
 **IMF_KEY** | [**Object**](.md)| API key for accessing the IMF API. | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/problem+json

