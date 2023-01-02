document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-slider', {
          fixedWidth: 100,
          gap       : 10,
          rewind    : true,
          pagination: false,
    } ).mount();
  } );
  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#thumbnail-slider', {
          fixedWidth : 100,
      fixedHeight: 60,
          gap        : 10,
          rewind     : true,
          pagination : false,
      cover      : true,
    } ).mount();
  } );