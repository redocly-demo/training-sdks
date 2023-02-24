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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Assignments);
  }
}(this, function(expect, Assignments) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Assignments.CreateAssignment400Response();
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

  describe('CreateAssignment400Response', function() {
    it('should create an instance of CreateAssignment400Response', function() {
      // uncomment below and update the code to test CreateAssignment400Response
      //var instance = new Assignments.CreateAssignment400Response();
      //expect(instance).to.be.a(Assignments.CreateAssignment400Response);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new Assignments.CreateAssignment400Response();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new Assignments.CreateAssignment400Response();
      //expect(instance).to.be();
    });

  });

}));
