$(document).ready(onDocumentReady);

function onDocumentReady() {
  initBxSlider();
  initMeanmenu();
}

function initBxSlider () {
  $('.bxslider').bxSlider({
    mode: 'fade',
    captions: true
  });
}

function initMeanmenu() {
  $('header nav').meanmenu({
    meanMenuContainer: 'header',
    meanMenuTarget: 'header .container',
    meanScreenWidth: 560
  });
}