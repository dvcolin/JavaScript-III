/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - When in the global / window scope, the "this" keyword refers to the window object.
* 2. Implicit Binding - When inside of a local scope (an object), the "this" keyword refers to the object in which the "this" keyword is located.
* 3. New Binding - When an object is created from a constructor function, the "this" keyword refers to the object that is created using the constructor function.
* 4. Explicit Binding - When the "call" and "apply" methods are used, the "this" keyword refers to whatever is explicitly defined inside of the method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowBind(){

    console.log(this);
}

windowBind();

// Principle 2

// code example for Implicit Binding

const implicitObj = {
    name: 'Colin',
    age: 21,
    sayName: function() {
        return `Hi, my name is ${this.name} and I'm ${this.age} years old!`;
    } 
}

console.log(implicitObj.sayName());

// Principle 3

// code example for New Binding

function Dog(attributes) {
    this.name = attributes.name;
    this.breed = attributes.breed;
    this.age = attributes.age;
}

Dog.prototype.speak = function() {
    return `Hi, my name is ${this.name}! I'm a ${this.age} year old ${this.breed}! Woof!`;
}

const zara = new Dog({name: 'Zara', breed: 'Aussie', age: 10});
const gypsy = new Dog({name: 'Gypsy', breed: 'Aussie', age: 5});
const sadie = new Dog({name: 'Sadie', breed: 'Chihuahua', age: 8});

console.log(zara.speak());
console.log(gypsy.speak());
console.log(sadie.speak());

// Principle 4

// code example for Explicit Binding

/////// USED CONSTRUCTOR FUNCTION FROM ABOVE

console.log(gypsy.speak.call(zara));
console.log(sadie.speak.call(gypsy));