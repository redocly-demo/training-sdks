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

import ApiClient from '../ApiClient';
import Breakdown from './Breakdown';

/**
 * The USERGRADE model module.
 * @module model/USERGRADE
 * @version 1.0.0
 */
class USERGRADE {
    /**
     * Constructs a new <code>USERGRADE</code>.
     * @alias module:model/USERGRADE
     * @param id {String} 
     * @param user {String} 
     * @param score {Number} 
     * @param quiz {String} 
     * @param attempts {Number} 
     * @param breakdown {Array.<module:model/Breakdown>} 
     */
    constructor(id, user, score, quiz, attempts, breakdown) { 
        
        USERGRADE.initialize(this, id, user, score, quiz, attempts, breakdown);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, user, score, quiz, attempts, breakdown) { 
        obj['id'] = id;
        obj['user'] = user;
        obj['score'] = score;
        obj['quiz'] = quiz;
        obj['attempts'] = attempts;
        obj['breakdown'] = breakdown;
    }

    /**
     * Constructs a <code>USERGRADE</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/USERGRADE} obj Optional instance to populate.
     * @return {module:model/USERGRADE} The populated <code>USERGRADE</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new USERGRADE();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('quiz')) {
                obj['quiz'] = ApiClient.convertToType(data['quiz'], 'String');
            }
            if (data.hasOwnProperty('attempts')) {
                obj['attempts'] = ApiClient.convertToType(data['attempts'], 'Number');
            }
            if (data.hasOwnProperty('breakdown')) {
                obj['breakdown'] = ApiClient.convertToType(data['breakdown'], [Breakdown]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>USERGRADE</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>USERGRADE</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of USERGRADE.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['user'] && !(typeof data['user'] === 'string' || data['user'] instanceof String)) {
            throw new Error("Expected the field `user` to be a primitive type in the JSON string but got " + data['user']);
        }
        // ensure the json data is a string
        if (data['quiz'] && !(typeof data['quiz'] === 'string' || data['quiz'] instanceof String)) {
            throw new Error("Expected the field `quiz` to be a primitive type in the JSON string but got " + data['quiz']);
        }
        if (data['breakdown']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['breakdown'])) {
                throw new Error("Expected the field `breakdown` to be an array in the JSON data but got " + data['breakdown']);
            }
            // validate the optional field `breakdown` (array)
            for (const item of data['breakdown']) {
                Breakdown.validateJSON(item);
            };
        }

        return true;
    }


}

USERGRADE.RequiredProperties = ["id", "user", "score", "quiz", "attempts", "breakdown"];

/**
 * @member {String} id
 */
USERGRADE.prototype['id'] = undefined;

/**
 * @member {String} user
 */
USERGRADE.prototype['user'] = undefined;

/**
 * @member {Number} score
 */
USERGRADE.prototype['score'] = undefined;

/**
 * @member {String} quiz
 */
USERGRADE.prototype['quiz'] = undefined;

/**
 * @member {Number} attempts
 */
USERGRADE.prototype['attempts'] = undefined;

/**
 * @member {Array.<module:model/Breakdown>} breakdown
 */
USERGRADE.prototype['breakdown'] = undefined;






export default USERGRADE;

