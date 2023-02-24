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
    instance = new Quizzes.Quiz();
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

  describe('Quiz', function() {
    it('should create an instance of Quiz', function() {
      // uncomment below and update the code to test Quiz
      //var instance = new Quizzes.Quiz();
      //expect(instance).to.be.a(Quizzes.Quiz);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new Quizzes.Quiz();
      //expect(instance).to.be();
    });

    it('should have the property passingScore (base name: "passingScore")', function() {
      // uncomment below and update the code to test the property passingScore
      //var instance = new Quizzes.Quiz();
      //expect(instance).to.be();
    });

    it('should have the property questions (base name: "questions")', function() {
      // uncomment below and update the code to test the property questions
      //var instance = new Quizzes.Quiz();
      //expect(instance).to.be();
    });

  });

}));
