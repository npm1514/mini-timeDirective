angular.module("timeApp").directive("showTimeToday", function(){
  return {
    restrict: 'E',
    templateUrl: 'time.html',
    link: function (scope, element, attrs) {
      var currentTime = new Date();
      scope.day = currentTime.toString();
    }
  };
});
