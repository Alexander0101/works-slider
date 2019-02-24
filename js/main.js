$(document).ready(function(){
  $('.autoplay').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  infinite: true,
	  centerMode: true,
      variableWidth: true,
	  autoplaySpeed: 2000
	});
});