'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
//
//
//app.directive("controlGroup", function() {
//    return {
//        template:
//            ' <div class="form-group" ng-class="{ \'has-error\': isError }">\
//                <label for="{{for}}">{{label}}</label>\
//                <div class="controls" ng-transclude></div>\
//            </div>',
//        replace: true,
//        transclude: true,
//        require: "^form", // Tells Angular the control-group must be within a form
//
//        scope: {
//            label: "@" // Gets the string contents of the `label` attribute.
//        },
//
//        link: function (scope, element, formController) {
//            // The <label> should have a `for` attribute that links it to the input.
//            // Get the `id` attribute from the input element
//            // and add it to the scope so our template can access it.
//            var id = element.find(":input").attr("id");
//            scope.for = id;
//
//            // Get the `name` attribute of the input
//            var inputName = element.find(":input").attr("name");
//            // Build the scope expression that contains the validation status.
//            // e.g. "form.example.$invalid"
//            var errorExpression = [formController.$name, inputName, "$invalid"].join(".");
//            // Watch the parent scope, because current scope is isolated.
//            scope.$parent.$watch(errorExpression, function(isError) {
//                scope.isError = isError;
//            });
//        }
//    };
//});

app.directive("select2", function() {

    return {
        link: function (scope, element) {

        }
    };
});