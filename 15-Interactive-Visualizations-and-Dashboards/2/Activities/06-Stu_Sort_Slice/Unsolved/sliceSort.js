// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
var descending = numArray.sort((a, b) => b - a);
console.log(descending);
// Reverse the array order
var reversed = numArray.reverse();
console.log(reversed);
// Sort the array in ascending order using an arrow function
var ascending = numArray.sort((a, b) => a - b);

// Slice the first five elements of the sortedAscending array, assign to a variable
var ascendingFive = ascending.slice(0,5);