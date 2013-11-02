'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);




angular.module('myApp.directives', []).
    directive('blah', function blahValidator() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attr, ctrl) {

            var validator = function(value) {
                if (ctrl.$viewValue == "blah") {
                    ctrl.$setValidity('blah', false);
                    return null;
                }
                else {
                    ctrl.$setValidity('blah', true);
                    return value;
                }
            };

            ctrl.$formatters.push(validator);
            ctrl.$parsers.push(validator);
        }
    };
});

app.directive('validDate', function() {
    return {
        require: 'ngModel',
        link: function(scope, ele, attrs, ngModel) {
            //For DOM -> model validation
            ngModel.$parsers.unshift(function(value) {
                if (!value) {
                    ngModel.$setValidity('date', false);
                    return null;
                }
                var valid = moment(value.replace(/'/g,'').replace(/_/g, ''), 'DD-MM-YYYY', true).isValid();
                ngModel.$setValidity('date', valid);
                console.log('parser: ' + value.replace(/''/g,'').replace(/_/g, ''));
                return valid ? value : null;
            });

            //For model -> DOM validation
            ngModel.$formatters.unshift(function(value) {
                var strippedValue = value.replace(/'/g,'').replace(/_/g, '');
                ngModel.$setValidity('date', moment(strippedValue, 'DD-MM-YYYY', true).isValid());
                console.log('formatter: ' + value.replace(/''/g,'').replace(/_/g, ''));
                return value;
            });
        }
    }
});

app.directive('listPicker', function() {
    return {
        restrict: 'E',
        templateUrl: 'template/listpicker.html',
        scope: {
            selectedItems: "="
        },
        require: 'ngModel',
        link: function(scope, ele, attrs, formController) {

            formController.$setValidity('listPicker', true);

            var isRequired = Boolean(scope.$eval(attrs.isRequired));

            scope.add = function(item) {
                if (item) {
                    scope.selectedItems.push(item);
                    if (isRequired) {
                        formController.$setValidity('listPicker', scope.selectedItems.length !== 0);
                        formController.$setViewValue(scope.selectedItems);
                        scope.isDirty = true;
                    }
                }
            };

            scope.remove = function(item) {
                scope.selectedItems.splice(scope.selectedItems.indexOf(item), 1);
                formController.$setValidity('listPicker', scope.selectedItems.length !== 0);
                formController.$setViewValue(scope.selectedItems);
                scope.isDirty = true;
            };
        }
    }
});