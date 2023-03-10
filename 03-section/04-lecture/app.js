// For LOOP

// 1
// for (let i = 0; i < 10; i++) { // teskarisi ham i--
//   console.log(i);
// }

// 2
// for (let i = 5; i <= 10 && i > 4; i++) {
//   console.log(i);
// }

// 3
// for (let i = 0; i < 10;) {
//   console.log(i);
//   i++;
// }

// 4
// for (;;) {
//   console.log("infinity");
// }

// For-Of LOOP
// const array1 = ["Jamshid", "Ilhom", "Sardor", "Ulug'bek"];

// for(let i = 0; i < array1.length; i++) {
//   console.log(array1[i]);
// }

// let i = 0;
// for (const name of array1) { // har bitta loop da bitta yangi const name o'zgaruvchi yaratadi
//   console.log(name, i);
//   i++;
// }

// For-In LOOP
// nechta key bo'lsa shuncha ishlaydi
// const obj1 = {name: "Jamshid", age: 18, position: "Frontend developer"};
// for (const key in obj1) {
//   console.log(key);
//   console.log(obj1[key]);
// }

// const obj2 = {array1: ['Jamshid', 'Ilhom', 'Zuhriddin'], array2: [18, 12, 30]};

// for (const key in obj2) { // 2 ta array1, array2
//   console.log(key);
//   for (const name of obj2[key]) { // 3ta => array1, 3ta => array2
//     console.log(name);
//   }
// }

// While LOOP
// let j = 3;
// while (j < 3) {
//   console.log(j);
//   j++;
// }

// let j = 3;
// do {
//   console.log(j);
//   j++;
// } while (j < 3)

// let randomNumbers = [];
// let isFinished = false;

// while (!isFinished) {
//   let rndNumber = Math.random(); // 0 va 1 sonlar oralig'idagi ixtiyotiy sonlar
//   randomNumbers.push(rndNumber);

//   if (rndNumber > 0.5) { // qachonki rndNumber 0.5 dan katta bo'sa ishga tushsin
//     isFinished = true;
//     console.log(randomNumbers);
//   }
// }
