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
		}
		else {
    	 	t.classList.add('active');
		}
	}