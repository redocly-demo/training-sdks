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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ScoresApi);
  }
}(this, function(expect, ScoresApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ScoresApi.USERGRADE();
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

  describe('USERGRADE', function() {
    it('should create an instance of USERGRADE', function() {
      // uncomment below and update the code to test USERGRADE
      //var instance = new ScoresApi.USERGRADE();
      //expect(instance).to.be.a(ScoresApi.USERGRADE);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new ScoresApi.USERGRADE();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new ScoresApi.USERGRADE();
      //expect(instance).to.be();
    });

    it('should have the property score (base name: "score")', function() {
      // uncomment below and update the code to test the property score
      //var instance = new ScoresApi.USERGRADE();
      //expect(instance).to.be();
    });

    it('should have the property quiz (base name: "quiz")', function() {
      // uncomment below and update the code to test the property quiz
      //var instance = new ScoresApi.USERGRADE();
      //expect(instance).to.be();
    });

    it('should have the property attempts (base name: "attempts")', function() {
      // uncomment below and update the code to test the property attempts
      //var instance = new ScoresApi.USERGRADE();
      //expect(instance).to.be();
    });

    it('should have the property breakdown (base name: "breakdown")', function() {
      // uncomment below and update the code to test the property breakdown
      //var instance = new ScoresApi.USERGRADE();
      //expect(instance).to.be();
    });

  });

}));