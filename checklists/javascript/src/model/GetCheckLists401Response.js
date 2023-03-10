/**
 * Checklists Server API.
 * API to create and read checklists.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: dos@redocly.com.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetCheckLists401Response model module.
 * @module model/GetCheckLists401Response
 * @version 1.0
 */
class GetCheckLists401Response {
    /**
     * Constructs a new <code>GetCheckLists401Response</code>.
     * @alias module:model/GetCheckLists401Response
     * @param type {Object} 
     * @param title {Object} 
     */
    constructor(type, title) { 
        
        GetCheckLists401Response.initialize(this, type, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, title) { 
        obj['type'] = type;
        obj['title'] = title;
    }

    /**
     * Constructs a <code>GetCheckLists401Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCheckLists401Response} obj Optional instance to populate.
     * @return {module:model/GetCheckLists401Response} The populated <code>GetCheckLists401Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCheckLists401Response();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], Object);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], Object);
            }
            if (data.hasOwnProperty('detail')) {
                obj['detail'] = ApiClient.convertToType(data['detail'], Object);
            }
            if (data.hasOwnProperty('instance')) {
                obj['instance'] = ApiClient.convertToType(data['instance'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetCheckLists401Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetCheckLists401Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetCheckLists401Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

GetCheckLists401Response.RequiredProperties = ["type", "title"];

/**
 * @member {Object} type
 */
GetCheckLists401Response.prototype['type'] = undefined;

/**
 * @member {Object} title
 */
GetCheckLists401Response.prototype['title'] = undefined;

/**
 * @member {Object} detail
 */
GetCheckLists401Response.prototype['detail'] = undefined;

/**
 * @member {Object} instance
 */
GetCheckLists401Response.prototype['instance'] = undefined;






export default GetCheckLists401Response;

