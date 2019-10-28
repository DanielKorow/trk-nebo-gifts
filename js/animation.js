$(document).ready(function(){
	var dict = [];
	$('.flip-card').each(function(){
		dict.push({"top": $(this).position().top, "left": $(this).position().left})
	})
	$('.flip-card').each(function(){
		$(this).addClass('active')
		$(this).css({top: $(this).position().top, left: $(this).position().left})
	})
	$('.flip-card').css({position: "absolute"})

	$(document).keypress(function(e){
		if (e.which == 99) {
			$('.flip-card').each(function(){
			$(this).removeClass('active')
			$(this).animate({top: $('.center').position().top-$('.flip-card').height()/2-10, left: $('.center').position().left-$('.flip-card').width()/2-10})
			})
		}
	})

	$(document).keypress(function(e){
	if (e.which == 32) {
		function shuffleElements($elements) {
	var i, index1, index2, temp_val;

	var count = $elements.length;
	var $parent = $elements.parent();
	var shuffled_array = [];


	// populate array of indexes
	for (i = 0; i < count; i++) {
		shuffled_array.push(i);
	}

	// shuffle indexes
	for (i = 0; i < count; i++) {
		index1 = (Math.random() * count) | 0;
		index2 = (Math.random() * count) | 0;

		temp_val = shuffled_array[index1];
		shuffled_array[index1] = shuffled_array[index2];
		shuffled_array[index2] = temp_val;
	}

	// apply random order to elements
	$elements.detach();
	for (i = 0; i < count; i++) {
		$parent.append( $elements.eq(shuffled_array[i]) );
	}
}

shuffleElements( $('.flip-card') )
		$('.flip-card').each(function(index){
		$('.flip-card').delay(300)
		$(this).animate({top: dict[index].top, left: dict[index].left})
	})}})
})
