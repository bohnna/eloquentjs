function reverseArray(arr) {
	reversedArray = [];
	for (var i = arr.length - 1; i >= 0; i--) {
		reversedArray.push(arr[i]);	
	}
		
	return reversedArray;
}

function reverseArrayInPlace(arr) {
	for (var i = arr.length - 2; i >= 0; i--) {
			toEnd = arr[i];
			arr.splice(i,1);
			arr.push(toEnd);
	}

	return arr;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
