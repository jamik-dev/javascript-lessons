// how code gets executed
// function getAge() {
//   const yosh = 18;
//   return yosh;
// }
// function getPerson() {
//   const ism = 'Jamshid';
//   const age = getAge();
//   return `${ism}ning yoshi ${age} da`;
// }
// function greet() {
//   const person = getPerson();
//   console.log(person);
// }

// greet();

// primitive vs reference
// primitive
// let name = 'Jamshid';
// let anotherName = name;

// console.log(name);
// console.log(anotherName);

// name = 'Sardor';

// console.log(name);
// console.log(anotherName);

// Reference
// let person = { // stack => address => heap => value
//   name: 'Jamshid'
// }
// let anotherPerson = person;

// console.log(person);
// console.log(anotherPerson);

// person.name = 'Sardor';
// person.age = 18;

// console.log(person);
// console.log(anotherPerson);

// if we do not want it to change | agar biz uni o'zgarishini xohlamasak
// let person = {
//   name: 'Jamshid'
// }
// let anotherPerson = {...person}; // spread = yoymoq // new address/pointer

// console.log(person);
// console.log(anotherPerson);

// person.name = 'Sardor';
// person.age = 18;

// console.log(person);
// console.log(anotherPerson);

// why different
// let person1 = {
//   name: 'Sardor',
//   age: 20
// }
// let person2 = {
//   name: 'Sardor',
//   age: 20
// }

// console.log(person1 === person2);

// assigning new value in array
// const hobbies = ['Football'];
// let bla = [...hobbies];
// hobbies.push('Cooking'); // heap => 'Cooking'
// console.log(hobbies);
// console.log(bla);

// hobbies = ['Football', 'Cooking']; qila olmaysiz