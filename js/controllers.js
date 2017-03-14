angular.module('app.controllers', [])
  
.controller('filmeyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  for (var i = 0; i < indexing.length; i++) {
      jQuery("#filmey-container1").append('<a class="list card" style="display:block;text-decoration:none;" ui-sref="side-menu21.movie_info" id="filmey-card21" href="templates/movie_info.html"><ion-item class="item-icon-left assertive" id="filmey-list-item8"><i class="icon ion-ios-videocam"></i>'+indexing[i].name+'</ion-item><div class=" item item-image"><img src="'+indexing[i].image+'" style="display: block; width: 100%; margin-left: auto; margin-right: auto;"></div><div class="item item-body" id="filmey-list-item-container2"><div id="filmey-markdown2" class="show-list-numbers-and-dots"><p style="margin-top:0px;color:#000000;"><strong>Review By IMDb/ACTION</strong></p></div></div><ion-item class="item-icon-left item-icon-right assertive" id="filmey-list-item9" ui-sref="side-menu21.movie_info"><i class="icon ion-android-star"></i><span class="item-note">عرض المزيد</span><i class="icon ion-android-more-horizontal"></i></ion-item></a>');
      //$("#filmey-container1").append(i);
    }

}])
   
.controller('top10Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('downloadFilmeyPROCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('side-menu21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('movie_infoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('instagram_pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
