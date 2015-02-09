function arrayToList(arr) {
	list = {}
		for (i = 0; i <= arr.length - 1; i++) {
			list.push(value: arr.shift(), rest: arr.slice(i))
		}
		return list;
}

function listToArray() {

}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
