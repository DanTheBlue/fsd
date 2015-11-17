var app = angular.module('FracturedSpaceTrumps', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: "HomeController",
      templateUrl: "views/ship.html"
    })
});