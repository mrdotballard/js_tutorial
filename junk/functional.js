/*
// Returns username and domain for an email address
function splitParts(email) {
  return email.toLowerCase().split("@");
}

// Sorts numerical Array
function numberSort(a, b) {
  return (a - b);
}

let numbers = [12, 4, 664, 234, 5, 43, 72, 27];
console.log(numbers.sort(numberSort));*/


// Functional programming - map function
let states = ["New York", "Illinois", "Texas", "South Carolina", "North Carolina"];

function urlProcess(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function urlString(elements) {
  return elements.map(element => `https://example.com/${urlProcess(element)}`);
}

// console.log(urlString(states));

// Functional programming - filter function

function singleStateIncludes(elements) {
  return elements.filter(element => urlProcess(element).includes("texas"));
}

function singleStateSplit(elements) {
  return elements.filter(element => element.split(/\s+/).length == 2);
}

// console.log(singleStateIncludes(states));
// console.log(singleStateSplit(states));

// Functional solution to return product of all elements in Array
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 function productOfArray(elements) {
   return elements.reduce((total, element) => {
                           return total *= element;
                         }, 1);
 }

// console.log(productOfArray(numbers));


// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});
}
console.log(functionalLengths(states));
