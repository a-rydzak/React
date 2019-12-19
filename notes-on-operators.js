const person = { name: 'Andrew' };
const newPerson = { ...person, age: '???' };
// console.log(newPerson);

// --------------------------------------Start of nifty arrty operators
// case 1
let x = [1, 2, 3];
let y = [...x];
x[0] = 44;
// console.log(y);

// vs -------- case 2
x = [1, 2, 3, 5];
y = x;
x[0] = 44;
//console.log(y);

function sorter(...args) {
  return args.sort();
}

//console.log(sorter(1, 2, 3, 4, 5));

const filterMe = (...args) => {
  return args.filter(el => el > 5);
};

// console.log(filterMe(1, 2, 3, 4, 22));

// destructure

[a, b] = [1, 2, 3, 4, 5];

// console.log(`From [a, b] = [1, 2, 3, 4, 5]; A is ${a} amnd b is ${b}`);

var numbers = [1, 2, 3, 4, 5];

const doubleMe = numbers.map(item => item * item);

// console.log(doubleMe);

// console.log(numbers);
/*
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

// ------------------------------------find the numbers and return
const strr = '1.33TY,1,2,3,4,5,A';

const new_str = strr.split(',');

const filterme = arry => {
  return arry.filter(elem => !isNaN(parseInt(elem)));
};

const numberMe = arry => arry.map(item => parseInt(item));

const uniques = arry => new Set(arry);

const arrayMe = set => Array.from(set);

console.log(arrayMe(uniques(numberMe(filterme(new_str)))));
