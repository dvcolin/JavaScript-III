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
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old!`)
    } 
}

implicitObj.sayName();

// Principle 3

// code example for New Binding

function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}

Dog.prototype.speak = function() {
    console.log(`Hi, my name is ${this.name}! I'm a ${this.age} year old ${this.breed}! Woof!`);
}

const zara = new Dog('Zara', 'Aussie', 10);
const gypsy = new Dog('Gypsy', 'Aussie', 5);
const sadie = new Dog('Sadie', 'Chihuahua', 8);

zara.speak();
gypsy.speak();
sadie.speak();

// Principle 4

// code example for Explicit Binding

//USED CONSTRUCTOR FUNCTION FROM ABOVE

gypsy.speak.call(zara);
sadie.speak.call(gypsy);