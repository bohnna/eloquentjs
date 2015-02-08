function range(start, end, step) {
  arrRange = [];
  if (!step) step = 1;
  for (i = start; i <= end; i += step) {
    arrRange.push(i);
  }
  return arrRange;
}

function sum(number) {
  theSum = 0;
  for (i = 0; i < number.length; i++) {
    theSum += number[i];
  }
  return theSum;
}

blah = [0,1,2,3];
console.log(range(1,10,3));
console.log(sum(range(1,55, 10)));
