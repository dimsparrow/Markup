var Homepage = {
	init: function(){
		this.mainSlider();
		this.bxslider();
		this.isotope();
	},
	mainSlider: function(){
		$('.multiple-slide').slick({

		});
	},
	bxslider: function(){
		$('.bxslider').bxSlider({

		});
	},
	isotope: function(){
		$('.gallery').isotope({
			itemSelector: '.gallery-img'
		});
		$('.menu-potfolio').on( 'click', 'a', function(){
 			var filterValue = $(this).attr('data-filter');
  			$('.gallery').isotope({ filter: filterValue });
		});
	}
};


$(window).on('load', function(){
	Homepage.init();
});

