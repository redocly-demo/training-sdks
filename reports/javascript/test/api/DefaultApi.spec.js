/**
 * Impossible Missions Force Reports
 * Reports API.
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
    factory(root.expect, root.ImpossibleMissionsForceReports);
  }
}(this, function(expect, ImpossibleMissionsForceReports) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ImpossibleMissionsForceReports.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('getSummaryReports', function() {
      it('should call getSummaryReports successfully', function(done) {
        //uncomment below and update the code to test getSummaryReports
        //instance.getSummaryReports(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserActivity', function() {
      it('should call getUserActivity successfully', function(done) {
        //uncomment below and update the code to test getUserActivity
        //instance.getUserActivity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersSummary', function() {
      it('should call getUsersSummary successfully', function(done) {
        //uncomment below and update the code to test getUsersSummary
        //instance.getUsersSummary(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
