//Creating Module
var myapp = angular.module("modulesControllersModule", []);

//Creating Controller and Registering it with Module
myapp.controller("modulesControllerscontroller", function ($scope) {
    $scope.message = "Angularjs Modules, Controllers and Registerung controller with module";
});