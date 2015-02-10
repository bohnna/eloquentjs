function deepEqual(x, y) {
	if (typeof x == "object" && typeof y == "object")
		return x === y;
	else
		return x == y;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
