// converting data types


// number => string

// let num1 = 1; // type = number

// num1 = num1.toString(); // to = ga first
// num1 = String(num1); // second konstruktor

// num1 = "" + num1; // third

// console.log(num1);


// string => number

// let str1 = '1' // NaN = Not a Number, 'matn', '$', '/', !! '123' !!

// function parseint(a) {
//   // code
//   return qiymat;
// }

// str1 = parseInt(str1); // first
// str1 = parseFloat(str1); // second
// str1 = +str1; // third
// str1 = ~-str1; // forth // no recommended

// console.log(str1);



// mixing numbers

// let a = 3 + '3'; // number + string = string
// let b = 'hi' - 'h'; // string [matn] - string [matn] = NaN || Not Allowed
// let f = '5' - '3'; // string [number] - string [number] = number
// let c = 3 * '4'; // number * string [number] = number
// let d = 5 - '3'; // number - string [number] = number
// let e = 3 / '3'; // number / string [number] = number

// console.log(a);
// console.log(b);
// console.log(f);
// console.log(c);
// console.log(d);
// console.log(e);

// splitting code

// function stringToNumber(str) {
//   return parseInt(str); // string => number
// }

// function numberToString(num) {
//   return num.toString(); // number => string
// }

// console.log(numberToString(4));
// console.log(stringToNumber('5'));

// more operators

// let num = 4;

// num = num + 1;
// num += 1;

// num = num - 1;
// num -= 2;

// num = num * 2;
// num *= 2;

// num = num / 2;
// num /= 2;

// num = num + 1;
// num++; // only adds one

// num = num - 1;
// num--; // only subtracts one


// console.log(num);

// prefix and postfix

// let a = 4;
// let b = ++a; // prefix pre-fix

// console.log(a); // 5
// console.log(b); // 5

// let c = 4;
// let d = c++; // postfix post-fix

// console.log(c); // 5
// console.log(d); // 4

// let e = 5;
// let f = e++; // postfix
// let g = ++f; // prefix

// console.log(e); // 6
// console.log(f); // 5 // 6
// console.log(g); // 6


// let j = 5;
// let k = j++; // postfix
// let p = k++; // postfix
// let z = ++p; // prefix

// console.log(j); // 6
// console.log(k); // 5 // 6
// console.log(p); // 5 // 6
// console.log(z); // 6

// let q = 5;
// let w = 6;

// let p = q++ + ++w; // postfix + prefix

// console.log(q); // 6
// console.log(w); // 7
// console.log(p); // 5 + 7 = 12


// let e = 4;
// let t = e++; // postfix
// let u = e++; // postfix

// console.log(e); // 5 // 6
// console.log(t); // 4
// console.log(u); // 5