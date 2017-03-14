angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('side-menu21.filmey', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/filmey.html',
        controller: 'filmeyCtrl'
      }
    }
  })

  .state('side-menu21.top10', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/top10.html',
        controller: 'top10Ctrl'
      }
    }
  })

  .state('side-menu21.downloadFilmeyPRO', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/downloadFilmeyPRO.html',
        controller: 'downloadFilmeyPROCtrl'
      }
    }
  })

  .state('side-menu21', {
    url: '/side-menu21',
    templateUrl: 'templates/side-menu21.html',
    controller: 'side-menu21Ctrl'
  })

  .state('side-menu21.movie_info', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/movie_info.html',
        controller: 'movie_infoCtrl'
      }
    }
  })

  .state('side-menu21.instagram_page', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instagram_page.html',
        controller: 'instagram_pageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});