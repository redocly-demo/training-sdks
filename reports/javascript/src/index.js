/**
 * Impossible Missions Force Reports
 * Reports API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import GetUsersSummary404Response from './model/GetUsersSummary404Response';
import SummaryReports from './model/SummaryReports';
import UsersById from './model/UsersById';
import DefaultApi from './api/DefaultApi';


/**
* Reports API..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ImpossibleMissionsForceReports = require('index'); // See note below*.
* var xxxSvc = new ImpossibleMissionsForceReports.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ImpossibleMissionsForceReports.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ImpossibleMissionsForceReports.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ImpossibleMissionsForceReports.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The GetUsersSummary404Response model constructor.
     * @property {module:model/GetUsersSummary404Response}
     */
    GetUsersSummary404Response,

    /**
     * The SummaryReports model constructor.
     * @property {module:model/SummaryReports}
     */
    SummaryReports,

    /**
     * The UsersById model constructor.
     * @property {module:model/UsersById}
     */
    UsersById,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
