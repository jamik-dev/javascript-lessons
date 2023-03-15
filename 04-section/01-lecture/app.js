// var, let, const

// 1
// let name = 'Jamshid'; 
// function greet() { // function scope
//   let age = 18;
//   console.log(name, age);
// }
// console.log(name);
// greet();

// 2
// var name = 'Jamshid'; 
// var name = 'Sardor';
// function greet() {
//   var age = 18;
//   console.log(name, age);
// }
// console.log(name);
// greet();

// 3
// let name = 'Jamshid';
// let name = 'Sardor';

// 4
// var name = 'Jamshid'; // global scope

// function greet() { // function scope
//   var age = 18;
//   console.log(name, age, hobbies);
// }

// if (name === 'Jamshid') { // block scope
//   var hobbies = ['Suzish', 'Futbol', 'Chavqancha yotish'];
//   console.log(hobbies);
// }

// console.log(name, hobbies);
// greet();

// 5
// obyektdagi curly-braces block scope emas
// if (true){ // block scope
//   let nimadir = 'nimadir';
//   console.log(nimadir);
// }
// console.log(nimadir);

// hoisting

// 1
// console.log(name);
// let name = 'Jamshid';

// 2
// console.log(name);
// var name = 'Jamshid';

// 3
// var name;
// console.log(name);
// name = 'Jamshid';

// 4
// console.log(name);
// // code
// var name = 'Jamshid';

// use strict

// 1
// name = 'Jamshid';
// console.log(name);

// 2
// "use strict"
// name = 'Jamshid';
// console.log(name);

// 3
// var undefined = 5;
// console.log(undefined);

// 4
// "use strict"
// var undefined = 5;
// console.log(undefined);

// 5
// let undefined = 5;
// console.log(undefined);