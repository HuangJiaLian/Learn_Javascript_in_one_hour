// Comment something on the console
// console.log('Hello World');

//////////////
// Variable
//////////////
// let name = 'Jack'; 
// console.log(name);

// Cannot be a reserver keyword like: if, let 
// Should be meaningful
// Cannot start with a number 
// Cannot contain a space or hyphen(-)
// Are case-sensitive

// let firstName = 'Jack';
// let lastName='Huang';

///////////////
// Constant
///////////////
// const interestRate = 0.3;
// interestRate = 1; 
// console.log(interestRate);

////////////////////
// Primitive Types
////////////////////
// let name = 'Jack'; // String Literal
// let age = 27; //  Number Literal
// let isApproved = true; // Boolean Literal false or true
// let firstName = undefined;
// let selectedColor = null; // For future

// Dynamic Typing 
// let name = 'Jack'; // String Literal
// let age = 27; //  Number Literal
// let isApproved = true; // Boolean Literal false or true
// let firstName = undefined;
// let selectedColor = null; // For future

Object
let person = {
    name: 'Jack',
    age: 27
};

///////////////
Dot Notation
/////////////////
person.name = 'Bob'; 

// Bracket Notation
// person['name'] = 'Mary';
let selection = 'name';
person[selection] = 'Mary';

console.log(person)

Arrays 
let selectedColor = ['red','blue'];
selectedColor[2] = 1
console.log(selectedColor);
console.log(selectedColor[0]);
console.log(typeof selectedColor)
console.log(selectedColor.length)

Functions
// Tip: name is parameter && 'Jack' is an argument.
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

greet('Jack', 'Huang');
greet('Ben');

///////////////////////
// Types of Functions
///////////////////////
// Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number){
    return number * number; 
}
// Two function call
console.log(square(2))