angular.module('app.home.home', [
  'app.core'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('app.home.home', {
      url: '',
      views: {
        '': {
          templateUrl: '/app/components/home/assets/templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    });
  }
])
.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.clickEventOne = true;
  $scope.eventData;

  $scope.clickOne = function($event, data) {
    $scope.eventData = 'click one ' + data;
  };
  
  $scope.clickTwo = function($event, data) {
    $scope.eventData = 'click two ' + data;
  };

  $scope.changeClickEvent = function() {
    $scope.clickEventOne = !$scope.clickEventOne;
  };
}]);
