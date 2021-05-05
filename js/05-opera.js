const s1 = 5;
const s2 = -3;
const s3 = 7;

const suma = s1 + s2 + s3;
console.log(suma);

const w1 = `labas`;
const w2 = `rytas`;
const w3 = `tau`;
const sakinys = w1 + ` `+ w2 + ` ` + w3;
console.log(sakinys);

const sakinys2 = `${w1} ${w2} ${w3}`;
console.log(sakinys2);

const x = [10, 2, 8, 4];
const alternuojantiSuma = x[0] - x[1] + x[2] - x[3];
console.log(alternuojantiSuma);

console.log(`-----------------------`)

const d = [w1, w2, w3];
console.log(d);

const sakinys3 = d[2] + `, ` + d[1] + `, ` + d[0];
console.log(sakinys3);

const sakinys4 = `${d[2]}, ${d[1]}, ${d[0]}`;
console.log(sakinys4);

console.log(`-----------------------`)

//dr - d array reversed

const d1 = [...d];
const dr = d1.reverse();
console.log(dr); 

const sakinys5 = dr.join(` -=- `);
console.log(sakinys5);

console.log(`-----------------------`)

const d2 = [...d];
const sakinys6 = d2.reverse().join(`, `);
console.log(sakinys6);

