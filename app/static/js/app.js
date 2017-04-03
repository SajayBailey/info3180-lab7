// Your JavaScript Code here
/* global angular */
var app = angular.module("view_thumbnails",  []);

app.controller('t_ctrl', function($scope, $http) {
    $http.get('/api/thumbnails').then(function (response) {
        console.log(response.data.thumbnails);
        $scope.view_them = response.data.thumbnails;
    });
});