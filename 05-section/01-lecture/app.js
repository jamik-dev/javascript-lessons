// // parametrs
// function sayHi(name) { // name => parametr
//   // code
// }
// // argument
// sayHi('Jamshid'); // 'Jamshid' => argument

// // functions
// function sayHi(name) {
//   console.log("Hi " + name);
// }
// sayHi('Jamshid');

// Methods
// console.log("Jamshid".toUpperCase()); // toUpperCase => method

// Objects with function 
// let person = {
//   name: "Jamshid",
//   greet: function() {
//     console.log("Hello there");
//   }
// }
// person.greet(); // method
// console.log(person.name) // property

// functions are objects
// function sayHi(name) {
//   console.log("Hello " + name);
// }
// sayHi("Sardor");

// console.log(typeof sayHi);
// console.dir(sayHi);

// storing function in variables
// let say = function sayHi(name) { // expression, no more available in global scope
//   console.log("Hello " + name + age);
// }; // function expression
// say('Jamshid');

// let say2 = function(name) { // anonymous / no need to give a name on function if don't use from it
//   console.log("Hello " + name + age);
// };
// say2('Sardor')

// function decloration/statement
// sayHi("Jamshid");
// function sayHi(name) {
//   console.log("Hello " + name);
// }

// function expression
// const sayHi = function(name) {
//   console.log("Hello " + name);
// }
// sayHi("Jamshid");

// anonymous 1
// setTimeout(function() {
//   console.log("Hello");
// }, 2000); // 2000 ms => 2s

// // 2
// setTimeout(function sayHi() {
//   console.log("Hello");
// }, 2000);

// 3 - self-invoking functions - o'zini-o'zi uyg'otadigan funksiyalar
// (function() {
//   console.log("Hello");
// })();

