// Classes

// ES5
function Student(firstName, lastName){
  this.firstName = firstname;
  this.lastName = lastName;
}
let John = new Student('John', 'Muller');
// ES2015
class Student1 {
  constructor(firstName, lastName) {
    this.firstname = firstname;
    this.lastName = lastName;
  }
}
let Eme = new Student1('Eme', 'Lopes');


// Inheritence 
class Person {
  constructor(firstname, lastName) {
    this.firstname = firstname;
    this.lastName = lastName;
  }
  sayHello() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

class Student2 extends Person {

}


// Promises - one time guaranteed return of some future value
function displayAtRandomTime() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if(Math.random() > 0.5) {
        resolve('Yes');
      } else {
        reject('No');
      }
    });
  });
}

displayAtRandomTime()
  .then(function(value) {
    console.log(value);
  })
  .catch(function(error) {
    console.log(error);
  });



// ES2016 & ES2017
// Async functions

async function first() {
  return 'we did it';
}
first(); //returns a promise 
first().then(val => console.log(val)); // we did it

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
}

async function addAsync(x) {
  const a = await doubleAfter2Seconds(10);
  const b = await doubleAfter2Seconds(20);
  const c = await doubleAfter2Seconds(30);
  return x + a + b + c;
}

addAsync(10).then((sum) => {
  console.log(sum);
});

function lol() {
  return;
}
