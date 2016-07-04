$(document).ready(onDocumentReady);

function onDocumentReady() {
  initMeanmenu();
}

function initMeanmenu() {
  $('header nav').meanmenu({
    meanMenuContainer: '#header',
    meanMenuTarget: '#header .container',
    meanScreenWidth: 767
  });
}