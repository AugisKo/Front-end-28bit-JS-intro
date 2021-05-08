/*
Objektas yra key-value poru rinkinys (raktazodsi-reiksme
*/

const petras = {
name: 'Petras',
age: 99,
'likes banana': true
};

console.log(petras);

const maryte = {
    name: 'Maryte',
    age: 87,
    likesBanana: false
    };

console.log(petras.name, petras.age, petras.color);

console.log(petras["name"]);
console.log(petras["age"]);
console.log(petras["color"]);
console.log(petras["likes banana"]);
    
console.log('--------------');    

// console.log(petras.age);
// console.log(maryte.age);
// console.log(petras.name);
// console.log(maryte.name);

const gyventojai = [petras, maryte];

console.log(gyventojai[0]);
console.log(gyventojai[1]);
console.log(gyventojai[0].name);
console.log(gyventojai[1].age);

const batas = {
    name: 'Kaliosas 3000',
    color: 'red',
    pricing: [
        {
            country: 'LT',
            price: 99
        },
        {
            country: 'LV',
            price: 89
        },
        {
            country: 'EE',
            price: 199
        }
    ]
}

console.log(batas.pricing[0]);
console.log(batas.pricing[1]);
console.log(batas.pricing[2]);

const kepure = {
    name: 'Skrybele',
    color: 'Balta',
    pricing: {
        lt: 99,
        lv: 89,
        ee: 199
    }
}
    
console.log(kepure.pricing.lt)

    /* 
Gyvunas: 
        vardas, 
        kailio spalva, 
        amziu, 
        megstami patiekalai (pavadinimas, svoris, kaloriju kiekis, prioritetas), 
        pazymeti medziai ([x,y] koordinates, rusi, auksti)

Gyvunu prekiu parduotuve:
        pavadinimas,
        adresas,
        darbo laikas,
        asortimentas (pavadinimas, kiekis)

*/