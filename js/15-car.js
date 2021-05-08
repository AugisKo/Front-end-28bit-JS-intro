/*
Automobilis:
 - kuro kiekis (litrai)
 - kuro sanaudos litrais 100-ui kilometru
 - norimas nuvaziuoti atstumas (kilometrais)

Ar pavyks nuvaziuoti norima atstuma su turimu kuro kiekiu?
*/

function canDrive(kiekis, sanaudos, atstumas) {
    const imanomasNuvaziuotiAtstumas = kiekis / sanaudos * 100;

    if (imanomasNuvaziuotiAtstumas >= atstumas) {
        return true;
    }
    return false;
}

const try1 = canDrive(20, 5, 400);      // true
const try2 = canDrive(20, 5, 1);        // true
const try3 = canDrive(20, 5, 401);      // false
const try4 = canDrive(20, 5, 999);      // false
const try5 = canDrive(10, 10, 300);     // false

console.log(try1, '->', true);
console.log(try2, '->', true);
console.log(try3, '->', false);
console.log(try4, '->', false);
console.log(try5, '->', false);
