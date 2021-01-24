//Creating Module
var myapp = angular
    .module("addObjectsModule", [])  /*Module,Controller and registering controller with module, All in one line*/
    .controller("addObjectsController", function ($scope) {
        var employee = {                            /*Creating employee object*/
            firstName: "Manoj",
            lastName: "Kumar",
            gender: "Male"
        }
        $scope.message = "Adding Object to controller and placing Module,Controller and registering controller with module, All in one line";
        $scope.employee = employee; /*Attaching employee object to scope*/
    });