var myapp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { name: "Saba", dateofbirth: new Date("November 23, 1980"), gender: "female", salary: 55000.788 },
            { name: "Suraj", dateofbirth: new Date("November 23, 1980"), gender: "female", salary: 55000.788 },
            { name: "Manoj", dateofbirth: new Date("November 23, 1980"), gender: "female", salary: 55000.788 },
            { name: "Akansha", dateofbirth: new Date("November 23, 1980"), gender: "female", salary: 55000.788 },
            { name: "Gauri", dateofbirth: new Date("November 23, 1980"), gender: "female", salary: 55000.788 }
        ];
        $scope.employees = employees;
        $scope.rowlimit = 3;
    });