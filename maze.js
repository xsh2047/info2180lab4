"use strict";

var maze = document.getElementById("maze");
var boundaries = []; 


window.onload = function() {
	boundaries = $$("#maze div.boundary");
	for(var i = 0; i < boundaries.length; i++){
		boundaries[i].observe("mouseover",turnRed);
	}
	$("end").observe("mouseover", end);
	$("start").observe("click", restart);
	//$("maze").observe("mouseleave", turnRed);
	document.getElementById("maze").onmouseleave = turnRed;
};

var turnRed = function(){
	boundaries = $$("#maze div.boundary");
	for(var i = 0; i < boundaries.length; i++){
		boundaries[i].addClassName("youlose");
	}
};

var end = function(){
	var red = $("boundary1").className;
	console.log(red);
	if(red.indexOf("youlose") == -1){
		$("status").innerHTML = "CONGRATULATIONS: You Win!";
	}else{
		$("status").innerHTML = "YOU LOST! TRY AGAIN";
	}
};

var restart = function(){
	boundaries = $$("#maze div.boundary");
	for(var i = 0; i < boundaries.length; i++){
		boundaries[i].className = "boundary";
		$("status").innerHTML = "Move your mouse over the \"S\" to begin.";
	}
};