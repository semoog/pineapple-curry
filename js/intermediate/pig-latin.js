// write a function that translates english to pig-latin

function pigLatin(str) {
	var str = str.split(' ');
	for (var i = 0; i < str.length; i++) {
		var word = str[i].split('');
		var firstLetter = word.shift();
		word.push(firstLetter);
		word = word.join('') + 'ay';
		str[i] = word;
	}
	return str.join(' ');
}

console.log(pigLatin('this is a pig latin string'));
