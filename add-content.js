let answer = prompt('do you want to buy a car?yes/no');
let color = prompt('what is your favorite car color?');
let budget = prompt('what is your budget? please enter a number.');
let length = prompt('how many cars do you have?');

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

while (length === '' || length === null) {
	length = prompt('how many cars do you have?');
}

for (let index = 0; index < length; index++) {
	document.write(
		'<img src= "data:image/jpeg;base64,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" alt="car"/>',
	);
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
