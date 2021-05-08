/*Duotas array su tekstinemis reiksmemis ( string)
Reikia: sujungti juos atbulai iterpiant ", "
*/

const d = ['sakau', 'tau', 'rytas', 'labas'];

console.log(d);

let reverse = '';

// reverse += d[3];
// reverse += ', ';
// reverse += d[2];
// reverse += ', ';
// reverse += d[1];
// reverse += ', ';
// reverse += d[0];

// reverse = d[3] + ', ' + d[2] + ', ' + d[1] + ', ' d[0];

reverse = `${d[3]}, ${d[2]}, ${d[1]}, ${d[0]}`
console.log(reverse);

const d2 = [...d];
const jras = d2.reverse().join(', + ,');

console.log(jras);