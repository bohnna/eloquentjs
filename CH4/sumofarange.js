function range(start, end, step) {
  arrRange = [];

  if (!step) {
  	step = 1;
	} else {
		step = Math.abs(step);
	}

  if (start < end) {

		for (i = start; i <= end; i += step) {
			arrRange.push(i);
		}

  return arrRange;

	} else {

		for (i = start; i >= end; i -= step) {
			arrRange.push(i);
		}

  return arrRange;
  
	}

}

function sum(numbarr) {
  theSum = 0;

  for (i = 0; i < numbarr.length; i++) {
    theSum += numbarr[i];
  }

  return theSum;

}

console.log(range(55,1,-10));
console.log(sum(range(55, 1, -10)));
