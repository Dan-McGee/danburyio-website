'use strict';

// A service that handles interaction with our API for Companies.

angular.module('nhvioApp')
  .service('CompanyService', ['Restangular', '$q', function CompanyService(Restangular, $q) {

    // The Company list may be fetched multiple times,
    // but will unlikley change. Let's cache it in
    // the client so that browsing back and forth
    // is lickety-split.
    var cachedCompanyList = null;

    // Get a list of all users from the server
    var getCompanies = function(){
    	// Create a promise representing the result we'll return.
		var deferred = $q.defer();
        if (cachedCompanyList != null){
        		deferred.resolve(cachedCompanyList);
        }else{
            Restangular.one('companies').getList().then(function(Companies){
                cachedCompanyList = Companies;
                deferred.resolve(Companies);
        	});
        }
    	return deferred.promise;
    }

    var clearCompanyList = function(){
        cachedCompanyList = null;
    }

    return {
    	getCompanies: getCompanies,
        clearCompanyList: clearCompanyList,
    }
  }]);