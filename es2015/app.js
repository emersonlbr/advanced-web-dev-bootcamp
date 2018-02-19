// default paramenters
function add(a=2, b=2) {
  return a+b;
}
add(); //4
add(3,3); //6


// for .. of 
// to interate over an array
// doenst work on objects
let arr = [1,2,3,4,5];
for(let val of arr) {
  console.log(val);
  // 1 2 3 4 5
}

// Rest
function printRest(a,b,...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
printRest(1,2,3,4,5); //1 //2 //3,4,5


// Spread 
let arr1 = [1,2],
    arr2 = [3,4,5],
    arr3 = [6,7];
// concats all the arrays into one!
let combined = [...arr1, ...arr2, ...arr3];
console.log(combined);


let instructor = {
  firstname: 'Ellie',
  lastName: 'Schoppik'
};
// Creates a variable out of an object
let {firstname, lastName} = instructor;
console.log(firstname);