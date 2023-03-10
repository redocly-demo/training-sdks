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


import ApiClient from "../ApiClient";
import GetUsersSummary404Response from '../model/GetUsersSummary404Response';
import SummaryReports from '../model/SummaryReports';
import UsersById from '../model/UsersById';

/**
* Default service.
* @module api/DefaultApi
* @version 1.0.0
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getSummaryReports operation.
     * @callback module:api/DefaultApi~getSummaryReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SummaryReports} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get summary reports
     * Retrieves summary reports for a specific date range.
     * @param {Object} IMF_KEY 
     * @param {Object} startDate 
     * @param {Object} endDate 
     * @param {module:api/DefaultApi~getSummaryReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SummaryReports}
     */
    getSummaryReports(IMF_KEY, startDate, endDate, callback) {
      let postBody = null;
      // verify the required parameter 'IMF_KEY' is set
      if (IMF_KEY === undefined || IMF_KEY === null) {
        throw new Error("Missing the required parameter 'IMF_KEY' when calling getSummaryReports");
      }
      // verify the required parameter 'startDate' is set
      if (startDate === undefined || startDate === null) {
        throw new Error("Missing the required parameter 'startDate' when calling getSummaryReports");
      }
      // verify the required parameter 'endDate' is set
      if (endDate === undefined || endDate === null) {
        throw new Error("Missing the required parameter 'endDate' when calling getSummaryReports");
      }

      let pathParams = {
      };
      let queryParams = {
        'startDate': startDate,
        'endDate': endDate
      };
      let headerParams = {
        'IMF-KEY': IMF_KEY
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = SummaryReports;
      return this.apiClient.callApi(
        '/reports/summaries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserActivity operation.
     * @callback module:api/DefaultApi~getUserActivityCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UsersById} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get activity information for a specific user
     * Retrieves activity information for a specific user.
     * @param {Object} IMF_KEY 
     * @param {Object} id 
     * @param {module:api/DefaultApi~getUserActivityCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UsersById}
     */
    getUserActivity(IMF_KEY, id, callback) {
      let postBody = null;
      // verify the required parameter 'IMF_KEY' is set
      if (IMF_KEY === undefined || IMF_KEY === null) {
        throw new Error("Missing the required parameter 'IMF_KEY' when calling getUserActivity");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getUserActivity");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
        'IMF-KEY': IMF_KEY
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = UsersById;
      return this.apiClient.callApi(
        '/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersSummary operation.
     * @callback module:api/DefaultApi~getUsersSummaryCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get summary of users
     * Retrieves summary information about all users.
     * @param {Object} IMF_KEY API key for accessing the IMF API.
     * @param {module:api/DefaultApi~getUsersSummaryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    getUsersSummary(IMF_KEY, callback) {
      let postBody = null;
      // verify the required parameter 'IMF_KEY' is set
      if (IMF_KEY === undefined || IMF_KEY === null) {
        throw new Error("Missing the required parameter 'IMF_KEY' when calling getUsersSummary");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'IMF-KEY': IMF_KEY
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/problem+json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
