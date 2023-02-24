# Quizzes.QuizApi

All URIs are relative to *https://api.impossiblemissionsforce.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createQuiz**](QuizApi.md#createQuiz) | **POST** /quizzes | Create a quiz
[**listQuizzes**](QuizApi.md#listQuizzes) | **GET** /quizzes | Get all quizzes



## createQuiz

> createQuiz(opts)

Create a quiz

### Example

```javascript
import Quizzes from 'quizzes';
let defaultClient = Quizzes.ApiClient.instance;
// Configure API key authorization: imfKey
let imfKey = defaultClient.authentications['imfKey'];
imfKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//imfKey.apiKeyPrefix = 'Token';

let apiInstance = new Quizzes.QuizApi();
let opts = {
  'quiz': new Quizzes.Quiz() // Quiz | 
};
apiInstance.createQuiz(opts, (error, data, response) => {
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
 **quiz** | [**Quiz**](Quiz.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[imfKey](../README.md#imfKey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listQuizzes

> listQuizzes()

Get all quizzes

### Example

```javascript
import Quizzes from 'quizzes';
let defaultClient = Quizzes.ApiClient.instance;
// Configure API key authorization: imfKey
let imfKey = defaultClient.authentications['imfKey'];
imfKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//imfKey.apiKeyPrefix = 'Token';

let apiInstance = new Quizzes.QuizApi();
apiInstance.listQuizzes((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[imfKey](../README.md#imfKey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

