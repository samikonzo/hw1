'use strict'
var l = console.log;

var cubes = document.querySelectorAll('.cube');
cubes.forEach(cube => {
	cube.icon = cube.querySelector('.cube__icon');
	cube.info = cube.querySelector('.cube__info');
})

$('.cube').mouseover(function(e){
	$('.cube__icon', this).addClass('cube__icon--position-top');
	$('.cube__info', this).addClass('cube__info--position-week').removeClass('cube__info--position-today');
})

$('.cube').mouseout(function(e){
	var cube = $(this)[0];

	if(isParentContainsChild(cube, e.relatedTarget)){
		return
	}
	$('.cube__icon', this).removeClass('cube__icon--position-top');
	$('.cube__info', this).removeClass('cube__info--position-week').addClass('cube__info--position-today');

})

function isParentContainsChild(parent, child){
	if(!parent || !child) return false
	var result = parent.compareDocumentPosition(child) & 16;
	return result
}

