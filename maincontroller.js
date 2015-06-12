menubar.controller('MainController',['$scope',function($scope){
  $scope.title='Sample text written using AngularJS';
  $scope.menuoptions=
    [
      {
        name: 'Home'
      },
      {
        name: 'Features'
      },
      {
        name: 'Pricing'
      },
      {
        name: 'Sign Up'
      }
    ];
  $scope.display=function(index) {
                   alert($scope.menuoptions[index].name);
  };
}]);
