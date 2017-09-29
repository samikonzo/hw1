'use strict'
var l = console.log;

var cubesLis = document.querySelectorAll('#cubes > ul > li');



setTimeout( function f(){
	var count = Math.round(Math.random() * cubesLis.length);
	var nums = [].map.call(cubesLis, (el, i) => {
		return i;
	})
	var choosedNums = []
	
	for(var i = 0; i < count; i++){
		var currentNum = Math.round(Math.random() * (nums.length - 1))
		choosedNums.push(nums.splice(currentNum, 1)[0]);
	}

	choosedNums.forEach( num => {
		cubesLis[num].classList.toggle('today');
	})

	setTimeout(f, 500);
}, 500)

