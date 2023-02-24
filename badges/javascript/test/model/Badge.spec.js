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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Badges);
  }
}(this, function(expect, Badges) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Badges.Badge();
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

  describe('Badge', function() {
    it('should create an instance of Badge', function() {
      // uncomment below and update the code to test Badge
      //var instance = new Badges.Badge();
      //expect(instance).to.be.a(Badges.Badge);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new Badges.Badge();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Badges.Badge();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new Badges.Badge();
      //expect(instance).to.be();
    });

    it('should have the property requirements (base name: "requirements")', function() {
      // uncomment below and update the code to test the property requirements
      //var instance = new Badges.Badge();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new Badges.Badge();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new Badges.Badge();
      //expect(instance).to.be();
    });

  });

}));
