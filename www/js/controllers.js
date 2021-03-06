angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('myCtrl', function($scope, $ionicActionSheet,$ionicBackdrop, $timeout,$ionicLoading) {

   $scope.triggerActionSheet = function() {

      // Show the action sheet
      var showActionSheet = $ionicActionSheet.show({
         buttons: [
            { text: 'Edit 1' },
            { text: 'Edit 2' }
         ],
      
         destructiveText: 'Delete',
         titleText: 'Action Sheet',
         cancelText: 'Cancel',
      
         cancel: function() {
            // add cancel code...
            confirm("cancel");
         },
      
         buttonClicked: function(index) {
            if(index === 0) {
               // add edit 1 code
            }
        
            if(index === 1) {
               // add edit 2 code
            }
         },
      
         destructiveButtonClicked: function() {
            // add delete code..
         }
      });
   };
    $scope.showBackdrop = function() {
      $ionicBackdrop.retain();
    
      $timeout(function() {
         $ionicBackdrop.release();
      }, 3000);
   };

    $scope.showLoading = function() {
      $ionicLoading.show({
         template: 'Loading...'
      });
   };

   $scope.hideLoading = function(){
      $ionicLoading.hide();
   };
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

