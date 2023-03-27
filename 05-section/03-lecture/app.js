// Arrow Function = Anonymous function

// argumentsiz/parametrsiz
// let func1 = () => {
//   console.log("hello");
// }
// func1();

// faqatgina bitta argument/parametr
// let func2 = arg => {
//   console.log(arg);
// }
// func2("Hello");

// faqatgina bitta expression bo'lsa script da
// let func3 = (a, b) => a + b; // {} shart emas
// console.log(func3(1, 2));

// function func3(a, b) {
//   return a + b;
// }

// birdan ortiq expression'lar bo'lsa
// let func4 = (a, b) => {
//   a *= 2; // birinchi expression
//   return a + b; // ikkinchi expression
// }
// console.log(func4(1, 2));

// obyekt qaytarmoqchi bo'lsak
// let func5 = (a, b) => ({a1: a, b1: b});
// console.log(func5('lalaku', 'pamperslari'));

// qulayliklari => nom qisqartirilgan, obyektlar bilan ishlaganda, kam kod yozish
// 1
// function mevaNarxlari(nom) { // function decloration
//   if (nom === "olma") {
//     return 3000;
//   } else if (nom === "anor") {
//     return 5000;
//   } else { // nok
//     return 4000;
//   }
// }
// console.log(mevaNarxlari("anorsdfgsg"));

// 2
// let mevaNarxlari2 = nom =>  
//   nom === "olma" ? 3000 : (nom === "anor") ? 5000 : 4000; 

// console.log(mevaNarxlari2("anorfdhgfh"));

// Default arguments
// 1
// let mevaKirit = (meva, narx = 2000) => {
//   console.log(`Kiritilgan meva: ${meva}\nNarx: ${narx}`);
// }
// mevaKirit("ananas", 3000);

// 2
// let mevaKirit2 = (meva, narx = 2000) => {
//   console.log(`Kiritilgan meva: ${meva}\nNarx: ${narx}`);
// }
// let summa; // undefined
// mevaKirit2("olma", summa);

// 3
// let mevaKirit3 = (meva, narx = meva === "olma" ? 4000 : 2000) => {
//   console.log(`Kiritilgan meva: ${meva}\nNarx: ${narx}`);
// }
// mevaKirit3("anor");

// Rest Operator
// let sumUp = (a, ...numbers) => { // spread != rest operator
//   console.log(a);
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sumUp(1, 2, 32, 4, 24, 32)); // 94
// console.log(sumUp(-2, 3, 6, 34, 34, -4, 42)); // 115

// 2 
// sumUp = (...numbers, a)  a hech qachon aniqlanmaydi

// 3
// sumUp = (a, ...numbers)  a aniqlanadi

// 4
// function so'zi orqali ochilgan har qanday funksiyada arguments paramteri avtomatik bo'ladi
// function subtract() {
//   let subtraction = 0;
//   console.log(arguments, a)
//   for (const num of arguments) { // ishlatmang
//     subtraction -= num;
//   }
//   return subtraction;
// }
// console.log(subtract(1, 3, 5, 6, 10, -3, 50, 3));

// Creating functions in functions
// let sumUp = (...numbers) => { // function 1
//   let sum = 0;

//   let checker = a => { // function 2
//     return isNaN(a) ? 0 : a;
//   }

//   for (const num of numbers) {
//     sum += checker(num);
//   }
  
//   return sum;
// }
// console.log(sumUp(1, 2, 32, 'ewq', 24, 32));

// Callback functions
// function greet(nameHandler, name, age) {
//   console.log("greet function before nameHandler");
//   nameHandler(name, age);
//   console.log("greet function after nameHandler");
// }

// function handler(name, age) {
//   console.log(`\nMening ismim ${name}, yoshim ${age}'da\n`);
// }

// greet(handler, "Jamshid", 18);

// algorithm
// let stringCheck = (callFunc, ...strings) => {
//   let hasEmpty = false;
//   for (const string of strings) {
//     if (!string) {
//       hasEmpty = true;
//       break;
//     }
//   }
//   if(hasEmpty) {
//     callFunc();
//   } else {
//     console.log(`Hammasi nazorat ostida!`)
//   }
// }

// stringCheck(() => {
//   console.log(`Bo'sh string mavjud`);
// }, 'olma', 'anor', '', 'nok')

// bind()
// 1
// function greet(name, age) {
//   console.log(`Hello ${name}, age: ${age}`);
// }
// setTimeout(greet.bind(this, "Jamshid", 18), 3000);