/**
 * Activities
 * Activities.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PostActivitiesRequestMetadata model module.
 * @module model/PostActivitiesRequestMetadata
 * @version 1.0.0
 */
class PostActivitiesRequestMetadata {
    /**
     * Constructs a new <code>PostActivitiesRequestMetadata</code>.
     * @alias module:model/PostActivitiesRequestMetadata
     * @param user {Object} User who created the activity.
     * @param timestamp {Object} Timestamp when the activity was created.
     */
    constructor(user, timestamp) { 
        
        PostActivitiesRequestMetadata.initialize(this, user, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, user, timestamp) { 
        obj['user'] = user;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>PostActivitiesRequestMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostActivitiesRequestMetadata} obj Optional instance to populate.
     * @return {module:model/PostActivitiesRequestMetadata} The populated <code>PostActivitiesRequestMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostActivitiesRequestMetadata();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], Object);
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], Object);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], Object);
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PostActivitiesRequestMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PostActivitiesRequestMetadata</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PostActivitiesRequestMetadata.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

PostActivitiesRequestMetadata.RequiredProperties = ["user", "timestamp"];

/**
 * User who created the activity.
 * @member {Object} user
 */
PostActivitiesRequestMetadata.prototype['user'] = undefined;

/**
 * @member {Object} domain
 */
PostActivitiesRequestMetadata.prototype['domain'] = undefined;

/**
 * @member {Object} path
 */
PostActivitiesRequestMetadata.prototype['path'] = undefined;

/**
 * Timestamp when the activity was created.
 * @member {Object} timestamp
 */
PostActivitiesRequestMetadata.prototype['timestamp'] = undefined;






export default PostActivitiesRequestMetadata;

