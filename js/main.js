$(document).ready(function(){
	var gifts = JSON.parse(localStorage.getItem('gifts'))
	console.log(gifts)
	$.each(gifts, function(index, value){
		$('.bottom').append(`<div id='${index}' class='flip-card' onclick='flip(this)'><div class='flip-card-inner'><div class='flip-card-front'><img class='front-card-img' src='media/front.jpg' alt='front'></div><div class='flip-card-back'><img class='back-card-img' src='${value}' alt=''></div></div></div>`)
	})
})

function flip(t){
	// let card = document.getElementById(selector);
		if(t.classList.contains('active')) { 
    		t.classList.remove('active');
    		// delete 
		}
		else {
    	 	t.classList.add('active');
		}
	}


//Перемешиваем карточки
$(document).ready(function(){
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
})