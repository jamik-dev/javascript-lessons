// boolean operators

// let a = 5;// number
// let b = "5"; // string
// console.log(a == b); // true
// console.log(a != b); // false
// console.log(a === b); // false
// console.log(a > b); // false
// console.log(a >= b); // true
// console.log(!a); // false
// console.log(!!a) // !! o'zgaruvchilar oldidan qo'yilganda boolean type ga o'zgartirib beradi

// IF
// let a = 5;

// if (a !== '5') {
//   console.log("Ha teng ekan!");
// }

// console.log("tugadi!");

// console.log("5" !== "5"); // false
// console.log(5 !== "5"); // true
// console.log(5 === "5"); // false
// console.log("5" === "5"); // true

// console.log(5 == "5"); // true
// console.log(5 != "5"); // false
// console.log("5" == "5"); // true
// console.log("5" != "5"); // false

// IF  ELSE

// function worker(operator, num1, num2) {
//   let result = null;
//   if (operator === "add") { // type va qiymatni
//     result = num1 + num2;
//   } else {
//     result = num1 - num2;
//   }
//   return result;
// }

// console.log(worker("add", 10 , 12));
// console.log(worker("subtract", 10 , 12));

// IF ELSE ELSE-IF

// function worker(operator, num1, num2) {
//   let result = null;

//   if (operator === "add") {
//     result = num1 + num2;
//   } else if (operator === "subtract") {
//     result = num1 - num2;
//   } else if (operator === "multiply") {
//     result = num1 * num2;
//   } else {
//     result = num1 / num2;
//   }

//   return result;
// }

// console.log(worker("add", 20 , 10)); // 30
// console.log(worker("subtract", 20 , 10)); // 10
// console.log(worker("multiply", 20 , 10)); // 200
// console.log(worker("divide", 20 , 10)); // 2

// Object va Array tengligi

// let person1 = {name : "Jamshid"};
// let person2 = {name : "Jamshid"};
// let array1 = ["Max"];
// let array2 = ["Max"];
// console.log(person1 === person2); // false
// console.log(array1 === array2); //false

// console.log(person1.name == person2.name); // true
// console.log(array1[0] == array2[0]); // true

// let person3 = person1;
// console.log(person1 == person3);