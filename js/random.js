$(document).ready(function(){
	// var gifts = new Set()
	// gifts.add('1', '2', '3')
	var gifts = {1: 'media/1.jpg', 
				 2: 'media/2.jpg', 
				 3:'media/3.jpg', 
				 4:'media/4.jpg', 
				 5:'media/5.jpg', 
				 6:'media/6.jpg',
				 7:'media/7.jpg',
				 8:'media/8.jpg',
				 9:'media/9.jpg',
				 10:'media/10.jpg',
				 11:'media/11.jpg',
				 12:'media/12.jpg',
				 13:'media/13.jpg',
				 14:'media/14.jpg',
				 15:'media/15.jpg'}
	var json = JSON.stringify(gifts)
	var gifts_deleted = {}
	// gifts.splice( $.inArray('2', gifts), 1 );
	localStorage.setItem('gifts', json)
	localStorage.setItem('gifts_deleted', gifts_deleted)
	var gift = JSON.parse(localStorage.getItem('gifts'))
	console.log(gift)
})