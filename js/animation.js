$(document).ready(function(){
	var dict = [];
	$('.flip-card').each(function(){
		dict.push({"top": $(this).position().top, "left": $(this).position().left})
	})
	$('.flip-card').each(function(){
		$(this).css({top: $(this).position().top, left: $(this).position().left})
	})
	$('.flip-card').css({position: "absolute"})
	$('.flip-card').each(function(){
		$(this).animate({top: $('.center').position().top-$('.flip-card').height()/2-10, left: $('.center').position().left-$('.flip-card').width()/2-10})
	})

		$(document).keypress(function(e){
		if (e.which == 32) {
			$('.flip-card').each(function(index){
			$('.flip-card').delay(300)
			$(this).animate({top: dict[index].top, left: dict[index].left})
		})}})
})
