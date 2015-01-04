'use strict';

describe('Controller: CompanyEditCtrl', function () {

  // load the controller's module
  beforeEach(module('nhvioApp'));

  var CompanyeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CompanyeditCtrl = $controller('CompanyEditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
