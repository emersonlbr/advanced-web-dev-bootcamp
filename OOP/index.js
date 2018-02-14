// OOP is a programming model based around the idea of objetcs 'classes'

// Construtor Functions 

function House(bedrooms, bathrooms, numSqft) {
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

// the new keyword creates an empty object 
// sets 'this' to be that empty obejct 
// adds the line return this to the end of the function
// adds a property onto the empty object called '__proto__' which links the prototype property on the construtor funtion to the empty object

let house1 = new House(2,2,1000);
const house2 = new House(1,4,5000);

console.log(house1, house2);

function Dog(name, age, barked) {
  this.name = name;
  this.age = age;
  this.barked = barked;
}

const chula = new Dog('Chula', 3, false);

console.log(chula);