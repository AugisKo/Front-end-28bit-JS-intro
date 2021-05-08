console.log('Startas:');

for (let i = 0; i <= 5; i++) {
    if (i>0){ 
        console.log(i);
    }
}

console.log('Finisas');

console.log('-----------------------');

console.log('Startas:');

const nuo = 5;
const iki = 10;

for (let i = nuo; i <= iki; i++) {
    if (i>0){ 
        console.log(i);
    }
}

console.log('Finisas');

console.log('-----------------------');

/*
Isspausdinti skaicius intervale, bet padvigubintus
*/

console.log('Startas:');

const nuo2 = 5;
const iki2 = 10;

for (let i = nuo2; i <= iki2; i++ * 2) {
    if (i>0){ 
        console.log(i * 2);
    }
}

console.log('Finisas');

console.log('-----------------------');

/*
Turime sarasa (array) ir reikia isspausdinti visas jo reiksmes
*/

console.log('Startas:');

const marks = [10, 2, 8, 4, 6, 9, 1, 7, 3, 5];

const f = marks.length;
for (let i = 0; i < f; i++) {
        console.log(marks[i]);
    }


console.log('Finisas');