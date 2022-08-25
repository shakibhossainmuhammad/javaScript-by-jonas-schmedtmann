// let js = 'amazing';
// // if (js === 'amazing') alert('JavaScript is FUN!')

// 40 + 30 + 50 - 23;
// console.log(40 + 30 + 50 - 23);
// console.log('shakib');

// let firstName = 'Saad';
// console.log(firstName);

// Data Type
/*let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);

console.log(typeof true);
console.log(typeof JavaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'true');

JavaScriptIsFun = 'Yes!';
console.log(typeof JavaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
// console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

// let and const
// let age = 30;
// age = 31;
// const birthYear = 1991;
// birthYear = 1990;

// const job;

// var job = 'Programmer';
// job = 'teacher';

// lastName = 'Saad';
// console.log(lastName);

// Basic Operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

// const firstName = 'Saad';
// const lastName = 'Khan';
// console.log(firstName + ' ' + lastName);

// let x = 10 + 5; //15
// x += 10; // x = x + 10 25
// x += 4;
// x++;
// x--;
// x--;
// console.log(x);

// comparison Oprators

// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// 19. Operator Precedence
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// 16. Coding Challeng
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJhon = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJhon;
// console.log(BMIMark, BMIJhon, markHigherBMI);

// 17. Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const Jonas =
//   "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(Jonas);

// const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}`;
// console.log(jonasNew);

// console.log(`Just a regular string..........`);

// console.log('String with \n multiple \n lines');

// console.log(`String
// multiple
// lines`);

// 18. Taking Decision_if_else Statement
// const age = 17;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log('Saad can start driving license 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Saad is too young. Wait another ${yearsLeft} years :`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJhon = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJhon);

// if (BMIMark > BMIJhon) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJhon})!`);
// } else {
//   console.log(`John's BMI (${BMIJhon}) is higher than Marks's(${BMIMark})!`);
// }

// 20. Type Conversion and Coercion
//Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Joas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// Type Coercion
// console.log('I am ' + 23 + ' years old ');
// console.log('23' - '10' + -3);
// console.log('23' - '2');
// console.log('23' > ' 18');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

/*
21.Truthy and Falsy Values

23. boolean

21 Truthy and Falsy Values


5 falsy value : 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Saad'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YaY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}



// 22. Equality Operator _== Vs ===


const age = '18';
if (age === 18) console.log('You just become an adult :D (strict)');
if (age == 18) console.log('You just become an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log('Cool! 23 is an amzing number');
} else if (favourite === 7) {
  console.log('7 is also a cool number');
} else if (favourite === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favourite !== 23) console.log('Why not 23');
// 18 === 18 - true
// 18 === 19 - false
// '18' == 18 - true
// '18' === 18 - false


// 20. Boolean Logic

// 24. Logical Operator

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = true; // c
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}



// 25. Coding Challenge #3

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreDolphins);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreDolphins);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the 🥪');
}


// 26. The switch Statement

const day = 'wednesday';
switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetupp');
    break;
  case 'tuesday':
    console.log('Prepare theory video');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record video');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'friday') {
  console.log('Plan course structure');
  console.log('Go to coding meetupp');
} else if (day === 'tuesday') {
  console.log('Prepare theory video');
} else if (day === 'wednesday' || day === 'thurday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record video');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}


// 27 Statments and Expressions
if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Saad';
console.log(`I'm ${2037 - 1991} years old ${me}`);


// 28. The conditional (Ternary) Operator

const age = 24;
// age >= 18
//   ? console.log('I like to drink tea 🍹')
//   : console.log('I like to drink water 🚰');

const drink = age >= 18 ? 'Tea 🍵' : 'water 🚰';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'Tea 🍵';
} else {
  drink2 = 'Water 🚰';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Tea 🍵' : 'water 🚰'}`);


// 29. coding challenge #4

const bill = 40;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
