$(document).ready(function() {
	$('.click-element').click(function(){
		$(this).addClass('active');
		$('html, body').animate({scrollTop:$('.elementId').position().top - 100}, 2000);
	});
});

