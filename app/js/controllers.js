'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', function($scope) {

        $scope.form = {
            firstName: 'Joe',
            lastName: 'Bloggs',
            dateOfBirth: '11-01-1980',
            nationalities: ['British', 'American'],
            favoriteColour: 'Green'
        };

  })
  .controller('MyCtrl2', [function() {

  }]);