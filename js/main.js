$(document).ready(function(){
	$('.hamburger-icon').on('click', function(){
		$(this).toggleClass('active');
		$('header nav').toggleClass('open');
	});
	$('.hero-slider').slick({
		autoplay:true,
		autoplaySpeed:5000
	});
	var hGoalContent = $('.goal .content').height();
	$('.goal .logo-cont').css({height:hGoalContent+"px"});
	$(window).resize(function(event) {
		var hrGoalContent = $('.goal .content').height();
		$('.goal .logo-cont').css({height:hrGoalContent+"px"});
	});
});