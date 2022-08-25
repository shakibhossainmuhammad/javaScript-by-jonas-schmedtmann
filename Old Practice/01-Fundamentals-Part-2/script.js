/* 
// 32. Activiting Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


// 33. Function

function logger() {
  console.log('My name is Jonas');
}

//calling /running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = number('23');


// 34. Function Declarations vs. Expression
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
};
const age2 = calcAge2(1991);

console.log(age1, age2);



// 35. Arrow Function

const calcAge3 = (birthYeah) => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Saad'));
console.log(yearsUntilRetirement(1980, 'Akash'));


// 36. Function Calling Other Function

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applesPieces} pieces of apple and ${orangesPieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


// 37. Reviewing Function

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🥳`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, 'Saad'));
console.log(yearsUntilRetirement(1950, 'Akash'));


// 38. coding challenge #1

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins.....');
  }
};
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);

// test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


// 39. Introduction to Array

const friend1 = 'Joy';
const friend2 = 'Akash';
const friend3 = 'Saad';

const friends = ['Joy', 'Akash', 'Saad'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[0] = 'jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = ['jonas', 'Schmedimenn', 2037 - 1991, 'tracher', friends];
console.log(jonas);


// 40. Basic Array Operator(METHODS)
const friends = ['Joy', 'Akash', 'Saad'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove element
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Akash'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Akash'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Akash')) {
  console.log('You have a friend called Akash');
}



// 41. Coding Challenge #2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[2], bills[2] + tips[2]];

console.log(bills, tips, total);


// 42. Introduction to Object

const jonasArray = [
  'Jonas',
  'Schmed',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};

//  43. Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  );
}

jonas.location = 'Portugal';
jonas['twitter'] = '@saadkhan';
console.log(jonas);

// Challenge
//"Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);


// 44. Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // },

  calcAge: function () {
    this.age = 2037 - jonas.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} -year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
  },
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a drive's license"
console.log(jonas.getSummary());


// 45. Coding Challenge #3

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
  );
}


// 46. lteration_The for Loop
// console.log('Lefting weights repetition 1 🏋️');
// console.log('Lefting weights repetition 2 🏋️');
// console.log('Lefting weights repetition 3 🏋️');
// console.log('Lefting weights repetition 4 🏋️');
// console.log('Lefting weights repetition 5 🏋️');
// console.log('Lefting weights repetition 6 🏋️');
// console.log('Lefting weights repetition 7 🏋️');
// console.log('Lefting weights repetition 8 🏋️');
// console.log('Lefting weights repetition 9 🏋️');
// console.log('Lefting weights repetition 10 🏋️');

// for loop keeps running while condition id TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lefting weights repetition ${rep} 🏋️`);
}


// 47. Looping Array, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmed',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

const types = [];

// console.log(jonas[0])
// console.log(jonas[1])

// ...
// console.log(jonas[4])
//jonas[5] does NOt exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof [i]);
}

// types[0] = 'string';

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}


const jonas = [
  'Jonas',
  'Schmed',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exericse ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weght repeting ${rep} 🏋️`);
  }
}


// 48 Looping Backwards and Loops in Loops

const jonas = [
  'Jonas',
  'Schmed',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true,
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lefting Weight repetion ${rep} 🏋️`);
  }
}


// 49. The while Loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lefting weights repetition ${rep} 🏋️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lefting weights repetition ${rep} 🏋️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

// 50. Coding Chalenge #4
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
