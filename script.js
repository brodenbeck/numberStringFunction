var myArray = [ ];

function makeArray(begin, end) {
	while(begin <= end) {
		myArray.push(begin);
		begin++;
	}
}

makeArray(-27, 12);

console.log(myArray);