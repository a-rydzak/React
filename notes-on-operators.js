const person = { name: 'Andrew' };
const newPerson = { ...person, age: '???' };
console.log(newPerson);

// case 1
let x = [1, 2, 3];
let y = [...x];
x[0] = 44;
console.log(y);

// vs -------- case 2
x = [1, 2, 3, 5];
y = x;
x[0] = 44;
console.log(y);

function sorter(...args) {
  return args.sort();
}

console.log(sorter(1, 2, 3, 4, 5));
