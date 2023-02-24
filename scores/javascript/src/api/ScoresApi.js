/**
 * Scores API
 * Scores API.
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
import Error from '../model/Error';
import ListScores403Response from '../model/ListScores403Response';
import USERGRADE from '../model/USERGRADE';

/**
* Scores service.
* @module api/ScoresApi
* @version 1.0.0
*/
export default class ScoresApi {

    /**
    * Constructs a new ScoresApi. 
    * @alias module:api/ScoresApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the listScores operation.
     * @callback module:api/ScoresApi~listScoresCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/USERGRADE>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all scores
     * @param {String} IMF_KEY API KEY
     * @param {Object} opts Optional parameters
     * @param {String} opts.user Name of user
     * @param {String} opts.quiz Quiz name
     * @param {module:api/ScoresApi~listScoresCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/USERGRADE>}
     */
    listScores(IMF_KEY, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'IMF_KEY' is set
      if (IMF_KEY === undefined || IMF_KEY === null) {
        throw new Error("Missing the required parameter 'IMF_KEY' when calling listScores");
      }

      let pathParams = {
      };
      let queryParams = {
        'user': opts['user'],
        'quiz': opts['quiz']
      };
      let headerParams = {
        'IMF-KEY': IMF_KEY
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [USERGRADE];
      return this.apiClient.callApi(
        '/scores', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
