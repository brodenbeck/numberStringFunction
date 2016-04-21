var myArray = [ ];

function makeArray(begin, end) {
	if(begin < end) {
		while(begin <= end) {
			myArray.push(begin);
			begin++;
		}
	}
	else {
		while(end <= begin) {
			myArray.push(begin);
			begin--;
		}
	}
}

makeArray(27, 12);

console.log(myArray);