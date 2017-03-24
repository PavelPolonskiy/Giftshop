(function() {
	var slideWidth = 300;
	var slidesCount = $('.featured').length;
	var sliderUl = $('.slider-ul');
	sliderUl.css('transform', '0px');

	$('.right-a').on('click', function() {
		var curSlide = parseInt( sliderUl.css('transform') );
		sliderUl.css('transform', curSlide - slideWidth + 'px');
		if (curSlide < -((slideWidth - 2) * slidesCount)) {
			sliderUl.css('transform', '0px');
		}
	});
})();
