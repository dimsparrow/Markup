var Homepage = {
	init: function(){
		this.mainSlider();
		this.burgerMenu();
		this.initMap();
		this.click();
	},
	mainSlider: function(){
		$('.main-slider .slider-container').slick({

		});
	},
	burgerMenu: function(){
		$('.burger-btn').on('click', function(){
			if(!$(this).hasClass('active')){
				$(this).addClass('active');
				$(this).next().slideDown('fast');
			} else {
				$(this).removeClass('active');
				$(this).next().slideUp('fast');
			}
		});
	},
	initMap: function(){
		$('.map').map({

		});
	},
	click: function(){
		$('.click-element').click({

		});
	}
};


$(window).on('load', function(){
	Homepage.init();
});

