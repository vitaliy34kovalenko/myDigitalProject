(function($) {
	'use strict'

	// Sliders
	$(function() {
		$('.slider').slick({
			dots:true,
			arrows: false,
			dotsClass: 'slick-dots  slider__dots',
			infinite: true,
            speed: 1000,
            fade: false,
            cssEase: 'linear',
            // autoplay: true,
            autoplaySpeed: 4000,
            adaptiveHeight: false,
		});

		$('.service').slick({
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots  slider__dots--features',
            infinite: true,
  			slidesToShow: 3,
  			slidesToScroll: 2,
            infinite: true,
            speed: 1000,
            fade: false,
            cssEase: 'linear',
            // autoplay: true,
            autoplaySpeed: 4000,
            adaptiveHeight: true,
             responsive: [
		    {
		      breakpoint: 900,
		      settings: "unslick"
		    }
		  	]
		});

		// $(".service").slick({
		//   dots: true,
		//   infinite: true,
		//   dotsClass: 'slick-dots  slider__dots--features',
		//   speed: 300,
		//   slidesToShow: 3,
		//   slidesToScroll: 2,
		//   responsive: [
		//     {
		//       breakpoint: 1024,
		//       settings: "unslick"
		//     }
		//   ]
		// });

		$('.team__associate').slick({
		  	infinite: true,
		  	arrows: false,
          	dots: true,
          	dotsClass: 'slick-dots slider__dots--features slider__dots--team',
		  	slidesToShow: 4,
		  	slidesToScroll: 3,
		  	infinite: true,
            speed: 1000,
            fade: false,
            cssEase: 'linear',
            // autoplay: true,
            autoplaySpeed: 4000,
            adaptiveHeight: true,
            responsive: [
            {
      		breakpoint: 1170,
      		settings: {
        		slidesToShow: 2,
        		slidesToScroll: 2,
        		infinite: true,
        		dots: true
      			}
    		},
		    {
		      breakpoint: 900,
		      settings: "unslick"
		    }
		  	]
		});
	})

	// Counters
	$(document).ready(function(){

		var show = true;
		var countBox = "#facts";
		$(window).on("scroll load resize", function(){

			if(!show) return false;

			var scrollPixel = $(window).scrollTop();
			var distanceToBlock = $(countBox).offset().top;

			var heightWindow = $(window).height();
			var heightDocument = $(document).height();

			var heightCountBox = $(countBox).outerHeight();

			if(scrollPixel + 200 >= distanceToBlock || heightWindow + scrollPixel == heightDocument 
				|| heightCountBox + distanceToBlock < heightWindow){
				$(".counters__number").spincrement({
					from: 0,
					thousandSeparator: "",
					duration: 3000
				});

				show = false;
			}
		});
	});

	// Map
	var mapElement = document.getElementById('map');
	var center = {
		lat: 49.070395, 
		lng: 33.405456
	};
	var map = new google.maps.Map(
		mapElement, 
		{
			zoom: 17, 
			center: center
		}
	);
	var marker = new google.maps.Marker({
		position: center, 
		map: map,
		icon: "../img/marker.png"
	});
})($);

