// Ternary operator

// let isLoggedIn = true;
// let someName = isLoggedIn ? 'Hello Jamshid' : 'Siz LogIn qilmagansiz!';

// let anyName = null;
// if (isLoggedIn) {
//   anyName = 'Hello Jamshid';
// } else {
//   anyName = 'Siz LogIn qilmagansiz!';
// }

// console.log(someName);
// console.log(anyName);

// expression and statement

// console.log(4 + 6 * 3); // expression
// let smth = 4 + 23 - 4; // expression = qiymat

// if (smth === 23) { // statement
//   console.log("working");
// }

// expression bu = belgisidan so'ng o'ng tarafda yoza oladigan qiymatlar ga aytiladi va u bizga qiymat beradi
// statement bu = belgisidan so'ng o'ng tarafda yoza olmaydigan narsa, va u qiymatlar bilan ishlaydi

// boolean tricks

// console.log(!!""); // falsy => true => false

// let userInput = ""; // falsy
// const isValidinput = !!userInput; // false
// console.log(isValidinput); // false
// console.log(!isValidinput); // true


// const userName = userInput || 'Jamshid';
// const realUserInput = "Sardor";
// const realUserName = realUserInput || 'Ilhom';

// console.log(userName);
// console.log(realUserName);

// let qanaqadir = "blabla";
// let nimadir = "";

// if (qanaqadir || nimadir) { // truthy/falsy = boolean bo'lmagan true/false qiymatlar
//   console.log(qanaqadir, nimadir);
// }


// let isLoggedIn = true;
// const shoppingCart = isLoggedIn && ['Books'];
// console.log(shoppingCart);

// const smth = null && 'Jamshid';
// console.log(smth);

// let qanaqadir = "blabla";
// let nimadir = "";

// if (qanaqadir && nimadir) {
//   console.log(qanaqadir, nimadir);
// }