var warm = document.getElementById('warm').value;
var cold = document.getElementById('cold').value;

var colorful = document.getElementById('colorful').value;
var monochrome = document.getElementById('monochrome').value;

var bright = document.getElementById('bright').value;
var dark = document.getElementById('dark').value;

var organic = document.getElementById('organic').value;
var digital = document.getElementById('digital').value;

var curvy = document.getElementById('curvy').value;
var strict = document.getElementById('strict').value;

var dynamic = document.getElementById('dynamic').value;
var static = document.getElementById('static').value;

function warmcold() {
	if (document.getElementById('warm').checked) {
		return warm;
	}
	if (document.getElementById('cold').checked) {
		return cold;
	}
};

function colorfulmonochrome() {
	if (document.getElementById('colorful').checked) {
		return colorful;
	}
	if (document.getElementById('monochrome').checked) {
		return monochrome;
	}
};

function brightdark() {
	if (document.getElementById('bright').checked) {
		return bright;
	}
	if (document.getElementById('dark').checked) {
		return dark;
	}
};

function organicdigital() {
	if (document.getElementById('organic').checked) {
		return organic;
	}
	if (document.getElementById('digital').checked) {
		return digital;
	}
};

function curvystrict() {
	if (document.getElementById('curvy').checked) {
		return curvy;
	}
	if (document.getElementById('strict').checked) {
		return strict;
	}
};

function dynamicstatic() {
	if (document.getElementById('dynamic').checked) {
		return dynamic;
	}
	if (document.getElementById('static').checked) {
		return static;
	}
};

var result = document.getElementById('container'); 

function submit() {
    result.innerHTML = "My artwork should be: " + warmcold() + ", " + colorfulmonochrome() + ", " + brightdark() + ", " + organicdigital() + ", " + curvystrict() + ", " + dynamicstatic();
};









