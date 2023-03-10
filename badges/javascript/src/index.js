/**
 * Badges
 * Badges API allows you to create Badges rules that can be applied to particular users.
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@impossiblemissionsforce.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import Badge from './model/Badge';
import GetBadge401Response from './model/GetBadge401Response';
import PostBadgesRequest from './model/PostBadgesRequest';
import RequirementInner from './model/RequirementInner';
import DefaultApi from './api/DefaultApi';


/**
* Badges API allows you to create Badges rules that can be applied to particular users..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Badges = require('index'); // See note below*.
* var xxxSvc = new Badges.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Badges.Yyy(); // Construct a model instance.
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
* var xxxSvc = new Badges.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Badges.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Badge model constructor.
     * @property {module:model/Badge}
     */
    Badge,

    /**
     * The GetBadge401Response model constructor.
     * @property {module:model/GetBadge401Response}
     */
    GetBadge401Response,

    /**
     * The PostBadgesRequest model constructor.
     * @property {module:model/PostBadgesRequest}
     */
    PostBadgesRequest,

    /**
     * The RequirementInner model constructor.
     * @property {module:model/RequirementInner}
     */
    RequirementInner,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};
