var Homepage = {
	init: function(){
		this.mainSlider();
		this.burgerMenu();
	},
	mainSlider: function(){
		$('.main-slider .container').slick({

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
	}
};


$(window).on('load', function(){
	Homepage.init();
});


