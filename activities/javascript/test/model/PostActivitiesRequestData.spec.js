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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ActivitiesApiSdk);
  }
}(this, function(expect, ActivitiesApiSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ActivitiesApiSdk.PostActivitiesRequestData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PostActivitiesRequestData', function() {
    it('should create an instance of PostActivitiesRequestData', function() {
      // uncomment below and update the code to test PostActivitiesRequestData
      //var instance = new ActivitiesApiSdk.PostActivitiesRequestData();
      //expect(instance).to.be.a(ActivitiesApiSdk.PostActivitiesRequestData);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new ActivitiesApiSdk.PostActivitiesRequestData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new ActivitiesApiSdk.PostActivitiesRequestData();
      //expect(instance).to.be();
    });

    it('should have the property item (base name: "item")', function() {
      // uncomment below and update the code to test the property item
      //var instance = new ActivitiesApiSdk.PostActivitiesRequestData();
      //expect(instance).to.be();
    });

    it('should have the property answer (base name: "answer")', function() {
      // uncomment below and update the code to test the property answer
      //var instance = new ActivitiesApiSdk.PostActivitiesRequestData();
      //expect(instance).to.be();
    });

  });

}));