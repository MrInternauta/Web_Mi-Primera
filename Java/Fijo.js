$(document).ready(function(){

var altura=$('.menu').offset().top;

$(window).on('scroll', function(){
if ($(window).scrolTop() > altura) {
	$('.menu').addClass('nav');
}
	else{$('.menu').removeClass('nav');

	}
});
});