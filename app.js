console.log('Aplikacija veikia');

var number = 100; // int
var number_string = 'Simtas'; // string
var array_numbers = [4545, 5646, 8716, 111];
var names = ['Petras', 'Jonas', 'Kazys', 'Tadas'];
var object = {
	wheels : 4,
	windows : 18,
	license_plate : 'BCG333'
};

var right = document.getElementById('right');
var jonas = document.getElementById('jonas');


// for (var i = 1; i < 11; i++) {
// 	right.innerHTML += '<div class="square">'+i+'</div>';	
// };

// for (var i = names.length - 1; i >= 0; i--) {
// 	names[i]
// }

// for (var i = 0; i < names.length; i++) {
// 	right.innerHTML += '<div class="square">'+names[i]+'</div>'; 
// }

var string = 'Simtas';

var second_number = 202;
var result;

result = number + second_number;

console.log('Rezultatas yra ' + result);

--result; // 302

// result = result + 5;
result += 5;

if (number_string == 100 && result != 55) {
	console.log('Rezultatas yra didesnis nei simtas');
} else {
	console.log('Rezultatas yra mazesnis nei simtas');
}

result -= 10;


// Events
// Functions
// Math
// True/false/null

function generate(qty) {

	var right = document.getElementById('right');
	right.innerHTML = '';

	for (var i = 0; i < qty; i++) {
		console.log(i);
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		right.innerHTML += '<div class="square" style="background-color: rgb('+r+','+g+','+b+');">' + i + '</div>';
	}
}



function show_items() {
	console.log('Showing');
	jonas.style.display = 'inline';
}


function hide_items() {
	console.log('Hiding');
	jonas.style.display = 'none';
	jonas.styl
}