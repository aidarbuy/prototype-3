angular.module('app', [])
    .controller('testCtrl', function($scope) {
            $scope.doctors = [{
                name: "Sales Person",
                description: "You will flight dragons"
            }, {
                name: "Accountant",
                description: "You will use the keyboard"}];
            });