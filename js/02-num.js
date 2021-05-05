/*
NUMBERS
teigiami, nulis, neigiami
desimtainiai, sveiki
tikri skaiciai, begalybe, NaN

*/

const teigiamas = 5;
const neigiamas = -8;
const nulis = 0;
const nulisMinus = -0;

console.log(nulis, nulisMinus);

const desimtainis = 3.141592564;
console.log(desimtainis);

const begalybe = Infinity;
const begalybeMinus = -Infinity;
console.log(begalybe, begalybeMinus);

const nesamone = NaN;
console.log(nesamone);

const puseZodzio = 'labas' / 2;
console.log(puseZodzio); /* atsakyme NaN */

const a = 2;
const b = 3;
const c = 4;

const d = a + b + c;
console.log (`${a} + ${b} * ${c} = ${d}`);

const d = (a + b) * c;
console.log (a, b, c, (a+b)*c);
console.log (`(${a} + ${b}) * ${c} = ${d}`);

const x = 2 * 4 / 8;
const y = 2 / 4 * 8;

console.log(x);
console.log(y);

console.log (`---------------------`);

const angle = 30;
const sin30 = Math.sin(angle/180*Math.PI);
console.log (sin30);

console.log(Math.sqrt(81));     //kvadratine saknis
console.log(Math.pow(2, 3));    //kelimas laipsniu
console.log(2 ** 3);            //kelimaslaipsniu
console.log(17 % 5);            //liekana