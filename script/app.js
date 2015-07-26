angular.module('photosik', ['ngAnimate'])
  .controller('MCtrl', function ($scope) {
    $scope.photos = [
      {image: 'photos/img00.jpg', description: 'Image something'},
      {image: 'photos/img01.jpg', description: 'Image 01'},
      {image: 'photos/img02.jpg', description: 'Image 02'},
      {image: 'photos/img03.jpg', description: 'Image 03'},
      {image: 'photos/img04.jpg', description: 'Image 04'},
      {image: 'photos/img05.jpg', description: 'Image 05'},
      {image: 'photos/img06.jpg', description: 'Image 06'},
      {image: 'photos/img07.jpg', description: 'Image 07'},
      {image: 'photos/img08.jpg', description: 'Image 08'}
    ];

    $scope.currentIndex = 0;

    $scope.setCPIndex = function (index) {
      $scope.currentIndex = index;
    };

    $scope.isCPIndex = function (index) {
      return $scope.currentIndex === index;
    };
    $scope.nextPhoto = function () {
      $scope.currentIndex = ($scope.currentIndex < $scope.photos.length -1) ? ++$scope.currentIndex : 0;
    };
    $scope.prevPhoto = function () {
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.photos.length - 1;
    };
});
