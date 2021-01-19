var column = '<div class="main_column"></div';
var tile = '<div class="main_tile"></div';

function createColumns() {
	for (var i = 0; i < 100; i++) { 
		$(".main_container").append(column);
	}
}

function createTiles() {
	for (var i = 0; i < 100; i++) { 
		$(".main_column").append(tile);
	}
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
	var elements = document.getElementsByClassName('main_tile'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = getRandomColor();
	}
}

function main() {
	createColumns();
	createTiles();
	setRandomColor();
}
