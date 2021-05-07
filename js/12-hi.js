/* 
Reikai funkcijos, kuriai davus varda, grazintu pasisveikinimo teksta

pvz.: Labas, as esu Vardenis!
*/

// Vardenis -> Labas, as esu Vardenis!
// Jonas -> Labas, as esu Jonas!
//Maryte -> Labas, as esu Maryte!

function hi(vardas) {
        return `Labas, as esu ${vardas}!`; //reikia naudoti tika
}

const hiVardenis = hi('Vardenis');
console.log(hiVardenis);

const hiJonas = hi('Jonas');
console.log(hiJonas);

const hiMaryte = hi('Maryte');
console.log(hiMaryte);

