function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var momchild = ancestry.map(function(person) {
  var mom = byName[person.mother];
  return [byName[person.name].name, byName[person.name].mother];
});

var hasmoms = momchild.filter(function(pair) {
  return pair[1] !== null;
});

var ages = hasmoms.map(function(pair) {
  return byName[pair[1]].name;
});

console.log(ages);
// → 31.2
