/**
 * Quizzes
 * Quizzes API
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
    factory(root.expect, root.Quizzes);
  }
}(this, function(expect, Quizzes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Quizzes.QuestionChoices();
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

  describe('QuestionChoices', function() {
    it('should create an instance of QuestionChoices', function() {
      // uncomment below and update the code to test QuestionChoices
      //var instance = new Quizzes.QuestionChoices();
      //expect(instance).to.be.a(Quizzes.QuestionChoices);
    });

    it('should have the property a (base name: "a")', function() {
      // uncomment below and update the code to test the property a
      //var instance = new Quizzes.QuestionChoices();
      //expect(instance).to.be();
    });

    it('should have the property b (base name: "b")', function() {
      // uncomment below and update the code to test the property b
      //var instance = new Quizzes.QuestionChoices();
      //expect(instance).to.be();
    });

    it('should have the property c (base name: "c")', function() {
      // uncomment below and update the code to test the property c
      //var instance = new Quizzes.QuestionChoices();
      //expect(instance).to.be();
    });

    it('should have the property d (base name: "d")', function() {
      // uncomment below and update the code to test the property d
      //var instance = new Quizzes.QuestionChoices();
      //expect(instance).to.be();
    });

  });

}));
