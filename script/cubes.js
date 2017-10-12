'use strict'
var l = console.log;

/*var CHANGE_TIME = 2000;

var cubes = document.querySelectorAll('.cube');

setTimeout( function f(){
	var count = Math.round(Math.random() * cubes.length);
	var nums = [].map.call(cubes, (el, i) => {
		return i;
	})
	var choosedNums = []
	
	for(var i = 0; i < count; i++){
		var currentNum = Math.round(Math.random() * (nums.length - 1))
		choosedNums.push(nums.splice(currentNum, 1)[0]);
	}

	choosedNums.forEach( num => {
		cubes[num].querySelector('.cube__icon').classList.toggle('cube__icon--size-small')
		cubes[num].querySelector('.cube__info').classList.toggle('cube__info--position-week');
		cubes[num].querySelector('.cube__info').classList.toggle('cube__info--position-today');
	})

	setTimeout(f, CHANGE_TIME);
}, CHANGE_TIME)
*/

var cubes = document.querySelectorAll('.cube');
cubes.forEach(cube => {
	cube.icon = cube.querySelector('.cube__icon');
	cube.info = cube.querySelector('.cube__info');
})
$('.cube').mouseover(function(e){
	$('.cube__icon', this).addClass('cube__icon--size-small');
	$('.cube__info', this).addClass('cube__info--position-week').removeClass('cube__info--position-today');

})
$('.cube').mouseout(function(e){
	$('.cube__icon', this).removeClass('cube__icon--size-small');
	$('.cube__info', this).removeClass('cube__info--position-week').addClass('cube__info--position-today');
})

