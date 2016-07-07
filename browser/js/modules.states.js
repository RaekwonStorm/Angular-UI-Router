'use strict';

juke.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

  // use the HTML5 History API
  $locationProvider.html5Mode(true);

  $urlRouterProvider
  .when('/', '/albums')
  .when('/artists/:id', '/artists/:id/albums');


  $stateProvider.state("albumList", {
    url: '/albums',
    templateUrl: '../views/albums.html',
    resolve: {
      albums: function (AlbumFactory) {
        return AlbumFactory.fetchAll();
      }
    },
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state("album", {
    url: '/albums/:id',
    templateUrl: '../views/album.html',
    resolve: {
      album: function (AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.id);
      }
    },
    controller: 'AlbumCtrl'
  });

  $stateProvider.state("artistList", {
    url: '/artists',
    templateUrl: '../views/artists.html',
    resolve: {
      artists: function (ArtistFactory) {
        return ArtistFactory.fetchAll();
      }
    },
    controller: 'ArtistsCtrl'
  });

    $stateProvider.state("artist", {
    url: '/artists/:id',
    templateUrl: '../views/artist.html',
    resolve: {
      artist: function (ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.id);
      }
    },
    controller: 'ArtistCtrl'
  });

    $stateProvider.state("artist.albums", {
    url: '/albums',
    templateUrl: '../views/artist.albums.html',
    controller: 'ArtistCtrl'
  });

    $stateProvider.state("artist.songs", {
    url: '/songs',
    templateUrl: '../views/songs.html',
    controller: 'ArtistCtrl'
  });

});
