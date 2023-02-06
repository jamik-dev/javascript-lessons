// naming variables

let ageGroup1 = {
  from: 18,
  to: 20
}

let ageGroup2 = {
  from: 20,
  to: 25
}

let ageGroup3 = {
  from: 25,
  to: 30
}

// operators

let tort = 4;
let besh = 5;

let natija = tort % besh; // 4
let natija2 = tort**besh; // 1024

let natija3 = natija2; // =

console.log(natija2)
console.log(natija3);


// data type primitive  => string | number

const str1 = 'string1'; // bitta chiziqcha
let str2 = "string2"; // ikkita chiziqcha, qo'shtirnoq
let str3 = `string3`; // backtick
let str4 = new String('string4'); // new String() - origin

let num1 = 2+3*2;

console.log(str2 + num1); // string + number = string 
console.log(str2, num1); // (string , number) = string number
console.log(str3 - num1); // NaN => Not a Number
console.log(str1 * num1); // NaN => Not a Number
console.log(str1 / num1); // NaN => Not a Number

let result = `Result: ${num1}`;
let result2 = 'Result: ' + num1;
console.log(result);
console.log(result2);

console.log(str1[1]); // s:0 t:1 r:2 i:3 n:4 g:5 1:6

let nameList = "Jamshid \nAbror \nBobur \nAxror";

console.log(nameList)