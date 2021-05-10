function lyginisNelyginis(skaicius) {
    if (skaicius % 2 > 0) {
        return false;
    } 
    return true;
    // return true;     jeigu lyginis skaicius
    // return false;    jeigu nelyginis skaicius
}

console.log(lyginisNelyginis (71), '->', false);
console.log(lyginisNelyginis (4), '->', true);


function even(m) {
    return m % 2 === 0 ? true :false;
}

console.log(even (71), '->', false);
console.log(even (4), '->', true);

function even (n) {
    return n % 2 === 0;
}

console.log(even (71), '->', false);
console.log(even (4), '->', true);

function even (t) {
    return !(t % 2);
}

console.log(even (71), '->', false);
console.log(even (4), '->', true);
console.log(even (0.5), '->', false);
