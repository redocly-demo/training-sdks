# scores_api

ScoresApi - JavaScript client for scores_api
Scores API.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install scores_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your scores_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ScoresApi = require('scores_api');


var api = new ScoresApi.ScoresApi()
var IMF_KEY = "IMF_KEY_example"; // {String} API KEY
var opts = {
  'user': "user_example", // {String} Name of user
  'quiz': "quiz_example" // {String} Quiz name
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.listScores(IMF_KEY, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.impossiblemissionsforce.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ScoresApi.ScoresApi* | [**listScores**](docs/ScoresApi.md#listScores) | **GET** /scores | Get all scores


## Documentation for Models

 - [ScoresApi.Breakdown](docs/Breakdown.md)
 - [ScoresApi.Error](docs/Error.md)
 - [ScoresApi.ListScores403Response](docs/ListScores403Response.md)
 - [ScoresApi.USERGRADE](docs/USERGRADE.md)


## Documentation for Authorization

All endpoints do not require authorization.