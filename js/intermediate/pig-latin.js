// write a function that translates english to pig-latin

function pigLatin(str) {
	return str.split(' ').map(function (value) {
		return value.slice(1) + value.charAt(0) + 'ay';
	}).join(' ');
}

console.log(pigLatin('this is a pig latin string'));
