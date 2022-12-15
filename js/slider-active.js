(function ($) {

	jQuery(document).ready(function () {


		// marquee slider
		$('.technolgy-slider-wrapper').slick({
			speed: 10000,
			autoplay: true,
			autoplaySpeed: 3000,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false,
			centerMode: true,
		});

		$('.brands-slider').slick({
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false
		});

		

	});

}(jQuery));

