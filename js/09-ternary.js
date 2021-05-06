/* 
TERNARY OPERATOR

klausimas ? teigiama : neigiama

*/

const arLyja = false;

const sketis = arLyja ? 'pasiimk' : 'nereikia';             //pasiimk / nereikia;
console.log(sketis);

const s1 = 4 < 2 
            ? 'daugiau' 
            : 'ne daugiau';
console.log(s1);


let s2 = '';
if (4 < 2) { 
    s2 = 'daugiau';
} else {
    s2 = 'ne daugiau';
}

console.log(s2);



let s3 = 'ne daugiau';
if (4 < 2) { 
    s3 = 'daugiau';
} 

console.log(s3);

console.log ('---------------------------');
/*
Nestintas Ternary
*/
const color = 'yellow';

const x1 = color === 'blue' 
                ? 'Melyna' 
                : color === 'red' 
                ? 'raudona' 
                : 'nezinoma spalva';

console.log(x1);

const color = 'blue';
const light = true;
const x2 = color === 'blue' 
                ? light 
                    ? 'Sviesiai melyna' 
                    : 'Tamsiai melyna' 
                : color === 'red' 
                ? 'raudona' 
                : 'nezinoma spalva';

console.log(x2);