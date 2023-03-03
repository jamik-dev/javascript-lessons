// combining conditions

// function divider(a) {
//   if (a % 2 === 0 || a % 5 === 0) { // OR = YOKI = +
//     console.log("ha bo'linadi");
//   } else {
//     console.log("yo'q bo'linmaydi");
//   }
// }

// function multiplier(a) {
//   if (a % 2 === 0 && a % 5 === 0) { // AND = VA = *
//     console.log("ha bo'linadi");
//   } else {
//     console.log("yo'q bo'linmaydi");
//   }
// }

// divider(4);
// divider(5);
// divider(7);
// divider(10);

// multiplier(4);
// multiplier(5);
// multiplier(10);

// Operator precedence

// console.log(4 + 6 * 3); // 22
// console.log(2 * 3 ** 3); // 2 * (3 ** 3) bilan bir xil
// console.log((2 + 4) * 3); // 18
// console.log(4 ** 3 ** 2); // 4 ** (3 ** 2) bilan bir xil
// console.log(4 / 3 / 2); // (4 / 3) / 2 bilan bir xil
// console.log(3 + 2 < 9 - 2) // (3+2)<(9-2)
// console.log(5 != 5 && 3 < 6 || 10 < 20) // ((5 != 5) && (3 < 6)) || (10 < 20)

// let a = b = 4;
// console.log(a, b);
// a = b = 5; // a = (b = 5) bilan bir xil
// console.log(a, b);

// truthy and falsy
// let name = "";

// if (name) {
//   console.log("Ishladi!");
// } else {
//   console.log("Ishlamadi!")
// }

// Coercion and Convertion
// let isLoggedIn = true;
// if(isLoggedIn) {
//   console.log("O'zi boolean qiymatda turipti!");
// }

// if(isLoggedIn === true) { // ortiqcha
//   console.log("O'zi boolean qiymatda turipti!");
// }

// // conversion
// console.log(1 + '2');

// // coercion
// let userInput = "Max";

// if (userInput) {
//   // code
// }

// Working with some examples

// 01 exercise
// let hasLicense = false;
// let age = 15;

// if (age > 16 && hasLicense) {
//   console.log("Haydashingiz mumkin!");
// } else if (age > 16 && !hasLicense) {
//   console.log("Birinchi haydovchilik guvohnomasini olishingiz kerak!");
// } else {
//   console.log("Siz haydash uchun yetarli yoshda emassiz");
// }

// 02 exercise
// let grade = 99;

// if (grade >= 90) {
//   console.log("Bahoyingiz A");
// } else if (grade >= 80) {
//   console.log("Bahoyingiz B");
// } else if (grade >= 70) {
//   console.log("Bahoyingiz C");
// } else if (grade >= 60) {
//   console.log("Bahoyingiz D");
// } else {
//   console.log("Bahoyingiz F");
// }
