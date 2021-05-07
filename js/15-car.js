/*
Automobilis:
 - kuro kiekis (litrai)
 - kuro sanaudos litrais 100-ui kilometru
 - norimas nuvaziuoti atstumas (kilometrais)

Ar pavyks nuvaziuoti norima atstuma su turimu kuro kiekiu?
*/

function canDrive (kk, ksl, nna) {
    if ((kk/ksl*100) <= nna) {
        return true;
    }
    return false;
}

const try1 = canDrive(20, 5, 400); // true
