'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state("albumList", {
    url: '/albums',
    templateUrl: '../views/albums.html',
    controller: 'AlbumsCtrl'
  });

  $stateProvider.state("album", {
    url: '/albums/:id',
    templateUrl: '../views/album.html',
    controller: 'AlbumCtrl'
  });

  $stateProvider.state("artistList", {
    url: '/artists',
    templateUrl: '../views/artists.html',
    controller: 'ArtistsCtrl'
  });

    $stateProvider.state("artist", {
    url: '/artists/:id',
    templateUrl: '../views/artist.html',
    controller: 'ArtistCtrl'
  });

});
