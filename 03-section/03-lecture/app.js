// Ternary operator

// let isLoggedIn = 8;
// let someName = isLoggedIn ? 'Hello Jamshid' : 'Siz LogIn qilmagansiz!';

// let anyName = null;
// if (isLoggedIn) {
//   anyName = 'Hello Jamshid';
// } else {
//   anyName = 'Siz LogIn qilmagansiz!';
// }
// console.log(someName);
// console.log(anyName);


// if else ni ikkinchi ko'rinishi

// let anyName2 = null;

// if (isLoggedIn == 6) anyName2 = 'Hello World!';
// else if (isLoggedIn == 7) anyName2 = 'blabla!';
// else anyName2 = "AAAA";

// console.log(anyName2)


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

// logical operators

// Boolean operators => logical and comparision operators

// comparision operators => '==', '!=', '===', '!==', '>', '<', '>=', '<='
// logical operators => '&&', '||', '!'

const userName = 'Max'; // truthy
const altName = ''; // falsy
// console.log(userName === 'Max'); // true
// console.log(userName); // tegilmadi, hali ham string => 'Max'
 
// console.log(userName || null); // userName truthy bo'lgani uchun || bizga qaytaradi  => 'Max'
// console.log(altName || 'Max'); // altName falsy bo'ldi (bo'sh string), shuning uchun 'Max' qaytdi => 'Max'
// console.log(altName || ''); // ham altName ham '' falsy ammo agar birinchi part falsy bo'lsa har doim ikkinchi part qaytariladi => ''
// console.log(altName || null || 'Anna' ); // altName va null falsy, 'Anna' qaytdi => 'Anna'

// console.log(userName && 'Anna'); // userName truthy, shuning uchun ikkinchi (!) qiymat qaytdi => 'Anna'
// console.log(altName && 'Anna'); // altName falsy, shuning uchun birinchi qiymat qaytdi => ''
// console.log(userName && ''); // userName truthy, shuning uchun ikkinchi qiymat qaytdi => ''

// // Qanday operator ishlatsak ham qiymat o'zgarmaydi, shunchaki talab qilingan joyda qiymat o'zgaradi lekin asl qiymati emas
// // comparision operatorlari har doim true/false qaytaradi
// // '&&' va '||' esa qiymatlarga boolean sifatida qaraydi va asl qiymatni qaytaradi (boolean qiymatni emas!)

// const enteredValue = ''; // user kiritgan qiymat sifatida olamiz
 
// const userName2 = enteredValue || 'NIMADIR NARSA'; // agar enteredValue false/falsy bo'ladigan bo'lsa 'NIMADIR NARSA' qaytariladi

// console.log(userName2);


// switch case

// let num = 8;

// switch (num) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;  
//   case 7:
//     console.log("Sunday");
//     break;  

//   default: 
//     console.log("Mavjud emas");      
// }


// let grade = 85;
// switch (true) {
//   case grade >= 90:
//     console.log("Sizning bahoyingiz A");
//     break;
//   case grade >= 80:
//     console.log("Sizning bahoyingiz B");
//     break;
//   case grade >= 70:
//     console.log("Sizning bahoyingiz C");
//     break;
//   case grade >= 60:
//     console.log("Sizning bahoyingiz D");
//     break;
//   default:
//     console.log("Sizning bahoyingiz F");
// }
