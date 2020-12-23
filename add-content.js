let answer = prompt('do you want to buy a car?yes/no');
let color = prompt('what is your favorite car color?');
let budget = prompt('what is your budget? please enter a number');
let avaliability;

let header = document.querySelector('header');

if (answer === 'yes') {
	avaliability = 'pick your favorite car';
	alert('we are glad to choose our website to buy your car.');
} else {
	window.confirm('are you sure?');
	avaliability =
		'please contact us for more information if you have any question and we can help you to pick your new car.';
}

document.write(' <h3>' + avaliability + ' </ h3> ');
document.write(' <h3>' + 'your favorite color:' + color + ' </ h3> ');
document.write(' <h3>' + 'your budget is: ' + budget + ' </ h3> ');

header.style.backgroundColor = color;
if (color === 'white') {
	header.style.color = 'black';
} else {
	header.style.color = 'white';
}
