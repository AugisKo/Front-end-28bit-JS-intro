function sumavimas(pirmasSkaicius, antrasSkaicius) {
    console.log('Iskviestas sumavimas!!!!');
    console.log('Pirmas:', pirmasSkaicius);
    console.log('Antras:', antrasSkaicius);

    return pirmasSkaicius + antrasSkaicius;
}

const s1 = sumavimas(8, 5);
console.log(s1);

const s2 = sumavimas(99, 99);
console.log(s2);

console.log(sumavimas(77, 777));

/* Taip negalima, nes neaprasyti kintamieji
const c = a + b;
console.log(c);

const a = 6;
const b = 66;
*/

