$(function(){
  initNav();
  initPortfolio();
});


function initNav(){
  $('#nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750
  });
}


function initPortfolio() {
  var el = $('#portfolio');
  var slides = el.find('.slide');
  var images = el.find('.images .block-slide');

  images.on('click', onBlockClick);

  showSlide(0);

  function onBlockClick(e) {
    var el = $(e.currentTarget);
    var index = images.index(el);

    showSlide(index);
  }

  function showSlide(index) {
    images.show()
      .eq(index).hide();

    slides.hide()
      .eq(index).show();
  }

}


