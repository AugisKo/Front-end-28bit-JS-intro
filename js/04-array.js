/*
ARRAY
  .shift  - prideti i gala nauja reiksme
    - prideti i prieki nauja reiksme
    - isimti is galo pirmaja reiksme

*/

const marks = [10, 2, 8, 4, 6];
const size = marks.length;

const firstMark = marks[0];
const second = marks[1];
const last = marks[size - 1];

console.log(size);
console.log (marks);
console.log(`pirmas:`, firstMark);
console.log(`antras:`, second);
console.log(`paskutinis:`, last);
const dictionary = [`labas`, `rytas`, `sakay`, `tau`];

const paskutinisZodis = dictionary[dictionary.length - 1];
console.log(paskutinisZodis); 

console.log(`-------------------`)
const abc = [`b`, `c`];
console.log (abc);

abc.push(`d`);
console.log(abc);

abc.shift();
console.log(abc);

abc.pop();
console.log(abc);

abc.unshift(`a`);
console.log(abc);

console.log(abc.reverse()); //seka perraso atvirksciai
console.log(abc);

console.log(`-------------------`)

console.log([`a`, `b`].concat([`c`, `d`]));

const a1 = [`a`, `b`];
const a2 = [`c`, `d`];
const a12 = a1.concat(a2);
console.log(a1);
console.log(a2);
console.log(a12);

const modern1 = [...a1, ...a2, ...a12];
console.log(modern1);

const modern2 = [...a2, ...a1];
console.log(modern2);
