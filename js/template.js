$(document).ready(function(){
	$('.mask img').each(function(){
		liquidGrid(this);
	});
});
$(window).resize(function() {
	$('.mask img').each(function(){
		liquidGrid(this);
	});
});