var app = angular.module('app',['ngRoute']);


app.config(function($routeProvider) {

  //$locationProvider.html5Mode(true);

  $routeProvider

  .when('/', {
      templateUrl    : 'views/home.html',
      controller     : 'homeCtrl',
      abstract: true
   })

  .when('/login', {
      templateUrl    : 'views/login.html',
      controller     : 'loginCtrl'
   })

  .when('/kpi', {
      templateUrl    : 'views/kpi.html',
      controller     : 'kpiCtrl'
   })

  .when('kpi.detail_kpi', {
      templateUrl    : 'views/detail_kpi.html',
      controller     : 'detail_kpiCtrl'
   })

  .when('/action', {
      templateUrl    : 'views/action.html',
      controller     : 'actionCtrl'
    })
  
  .when('/dash', {
      templateUrl    : 'views/dash.html',
      controller     : 'dashCtrl'
    })

  .when('/detail_kpi', { templateUrl: 'views/detail_kpi.html', controller: 'detail_kpiCtrl' })

  .when('/outro',      { templateUrl: 'views/outro.html'     , controller: 'outroCtrl' })

  .otherwise ({ redirectTo: '/login' });

});