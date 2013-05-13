Dynamic Event (Directive)
=====================

This directive allows you to dynamically change the callback of an event. This directive supports all of (and only) the events the AngularJS itself supports.

HTML Attributes
===============

* nag-click (nag-* for all angular supported events) - Object mapping the name of the callback to be trigger if the referencing value evaluates to true

Example Code
============

Javascript
```javascript
angular.module('docs.dynamicEvent', [])
.controller('DynamicEventCtrl', function($scope) {
  $scope.clickEvent2Active = false;
    $scope.clickEvent1 = function() {
      alert('click event 1');
    };

    $scope.clickEvent2 = function() {
    alert('click event 2');
  };
}).$inject = ['$scope'];
```

HTML
```html
<a href="#" nag-click="{'clickEvent1()': !clickEvent2Active, 'clickEvent2()': clickEvent2Active}">click me</a>
```
