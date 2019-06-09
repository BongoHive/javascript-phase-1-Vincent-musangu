// you solution should be here
let birthYear = 1997;
let future= 2019;
let age  = future - birthYear;
console.log(`you ${age } or ${(age - 1)}`)
//solution 2
let maximumAge = 70;
let numPerDay = 11;
let totalNeeded = (numPerDay * 365) * (maximumAge - age);
let results = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maximumAge;
console.log(results);