function arrayToList(arr) {
	list = {};
	for (i = arr.length - 1; i >= 0; i--) {
		list = {value: arr[i], rest: list};	
	}
	return list;
}

function listToArray(lta) {
	arr = [];
	for (var node = lta; node; node = node.rest) {
		if (node.value) {
			arr.push(node.value);
		}
	}
	return arr;
}

function prepend(x, y) {
	newlist = {value: x, rest: y};
	return newlist;
}

function nth(x, y) {

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
