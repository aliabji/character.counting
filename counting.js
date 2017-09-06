Object.size = function(obj) {
	var size = 0;
	for(key in obj) {
		if(obj.hasOwnProperty(key)) size++;
	}
	return size;
}


var str = 'lighthouseinthehouse';
var letters = new Object;


for(x = 0, length = str.length; x < length; x++) {
	var l = str.charAt(x)
	letters[l] = (isNaN(letters[l]) ? 1 : letters[l] + 1);
}

for(key in letters) {
	console.log(key + ': ' + letters[key]);
}
