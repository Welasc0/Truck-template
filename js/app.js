$("[data-slider]").slick({
	infinite: true,
	slidesToShow: 1,
	fade: true,
	speed: 1000,
	slidesToScroll: 1,
	autoplay: true,
  	autoplaySpeed: 1600,
  	waitForAnimate: false,
  	pauseOnHover: false,
});

$(function() {
	/* fixed header */
	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);

	$(window).on("scroll", function(){
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {
		if(scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/* scroll to topic */

	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var blockId = $(this).data("scroll"),
			blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset
		}, 1200);
	});
});