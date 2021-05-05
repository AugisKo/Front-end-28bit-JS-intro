/* 

INICIJAVIMO BUDAS:
const - nekeiciama reiksme
let - keiciama reiksme
var - keiciama reiksme

KINTAMUJU TIPAI: 
number (skaicius)
string (tekstas)
boolen (logine reiksme)
array (sarasas, masyvas, matrica)
object (objektas)
null (reiksme, kuri neegzistuoja, bet yra)
inderfined (neapibrezta)
map
set

*/

const metai = 2021;
console.log(metai); 

const vardas = 'Vardenis';
console.log(vardas);

const arSninga = false;
console.log('Ar sninga:' , arSninga);

const arTeigiama = true;
console.log('Ar teigiamas:' , arTeigiama);

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

const zodynas = ['labas', 'rytas', 'sakau', 'tau']; /*lauztyniai sklaisutai zymi sarasus*/
console.log(zodynas);
/*
const petras = {
    vardas: 'Petras'
    metai: 99,
    gyvenamojiVieta: 'Gatve g. 1-3, Miestas',
    vaikai: [
        {
            vardas: 'Onute',
            amzius: 67
        }
    ]
};
console.log(petras); /*riestiniai skliaustai zymi objektus */
