angular.module('app', ['ngResource'])
    .controller('testCtrl', function($scope, $resource) {
        $scope.doctors = $resource('/api/doctors').query();
    });