// break
// for (let i = 0; i < 5; i++) {
//   console.log(i, "i");
//   break;
// }

// nested loop break
// for (let i = 0; i < 5; i++) { // parent
//   console.log(i, "i");
//   for (let j = 0; j < 5; j++) { // child
//     console.log(j, "j");
//     break;
//   }
// }

// continue

// #1
// for (let i = 0; i < 5; i++) {
//   if(i === 3) {
//     break;
//   }
//   console.log(i, "i");
// }

// #2
// for (let i = 0; i < 5; i++) {
//   if(i === 3) {
//     continue;
//   }
//   console.log(i, "i");
// }

// # 3
// for (let i = 0; i < 5;) {
//   if(i === 3) {
//     continue;
//   }
//   console.log(i, "i");
//   i++;
// }

// labeled statement
// outerLoop: for (let i = 0; i < 5; i++) { // parent
//   console.log(i, "i");
//   innerLoop: for (let j = 0; j < 5; j++) { // child
//     console.log(j, "j");
//     break outerLoop;
//   }
// }

// let a = 0;
// while (a < 5) {
//   if (a === 3) {
//     break;
//   }
//   console.log(a);
//   a++;
// }

// throwing error
// let str1 = 'Salom';

// if(typeof str1 === 'string') {
//   throw {message: "Bu string, number kerak!"};
// }

// try-catch
// try {
//   let num1 = 10;
//   let result = num1 + num2;
//   console.log(result);
// } catch (error) {
//   console.log('Error chiqdi', error.message);
// } finally {
//   console.log("tugadi");
// }