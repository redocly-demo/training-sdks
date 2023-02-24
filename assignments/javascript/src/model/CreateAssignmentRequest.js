/**
 * Assignments
 * API to assign checklist or quiz to user.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: blips-and-chitze@redocly.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NewAssignment from './NewAssignment';

/**
 * The CreateAssignmentRequest model module.
 * @module model/CreateAssignmentRequest
 * @version 0.0.1
 */
class CreateAssignmentRequest {
    /**
     * Constructs a new <code>CreateAssignmentRequest</code>.
     * @alias module:model/CreateAssignmentRequest
     * @implements module:model/NewAssignment
     */
    constructor() { 
        NewAssignment.initialize(this);
        CreateAssignmentRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAssignmentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAssignmentRequest} obj Optional instance to populate.
     * @return {module:model/CreateAssignmentRequest} The populated <code>CreateAssignmentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAssignmentRequest();
            NewAssignment.constructFromObject(data, obj);

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('deadline')) {
                obj['deadline'] = ApiClient.convertToType(data['deadline'], 'Date');
            }
            if (data.hasOwnProperty('maxAttempts')) {
                obj['maxAttempts'] = ApiClient.convertToType(data['maxAttempts'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAssignmentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAssignmentRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * Assignment user.
 * @member {String} user
 */
CreateAssignmentRequest.prototype['user'] = undefined;

/**
 * Assignment name.
 * @member {String} name
 */
CreateAssignmentRequest.prototype['name'] = undefined;

/**
 * @member {module:model/CreateAssignmentRequest.TypeEnum} type
 */
CreateAssignmentRequest.prototype['type'] = undefined;

/**
 * Timestamp with deadline.
 * @member {Date} deadline
 */
CreateAssignmentRequest.prototype['deadline'] = undefined;

/**
 * Max attemps for assignmet.
 * @member {Number} maxAttempts
 */
CreateAssignmentRequest.prototype['maxAttempts'] = undefined;


// Implement NewAssignment interface:
/**
 * Assignment user.
 * @member {String} user
 */
NewAssignment.prototype['user'] = undefined;
/**
 * Assignment name.
 * @member {String} name
 */
NewAssignment.prototype['name'] = undefined;
/**
 * @member {module:model/NewAssignment.TypeEnum} type
 */
NewAssignment.prototype['type'] = undefined;
/**
 * Timestamp with deadline.
 * @member {Date} deadline
 */
NewAssignment.prototype['deadline'] = undefined;
/**
 * Max attemps for assignmet.
 * @member {Number} maxAttempts
 */
NewAssignment.prototype['maxAttempts'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreateAssignmentRequest['TypeEnum'] = {

    /**
     * value: "quiz"
     * @const
     */
    "quiz": "quiz",

    /**
     * value: "checklist"
     * @const
     */
    "checklist": "checklist"
};



export default CreateAssignmentRequest;
