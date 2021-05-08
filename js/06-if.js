/* 
IF - salygos sakinys

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, == ar lygu, != nelygu, === , !==
nenaudotini: ==, !=
naudotinis: >, <, >=, <=, === , !==


SABLONAI: 
if () {} 
if () {} else {}
if () {} else {}if () {} else {}
if () {} else {}if () {} else {}if () {} else {}

*/

if(4 >= 2) {
    console.log(`taip`);
} else {
        console.log(`ne`);
    };

/* BLOGAI
    if(4 = 4) {
        console.log(`taip`);
    } else {
            console.log(`ne`);
        };
*/

if(4 == 2) {
    console.log(`taip`);
} else {
        console.log(`ne`);
    };

const a = 4;
const b = 2;
if(a == b) {
    console.log(`taip`);
} else {
        console.log(`ne`);
    };

if(a != b) {
    console.log(`taip`);
} else {
        console.log(`ne`);
    };

const a1 = 44;
const b1 = '44';

if(a1 == b1) {
    console.log(`taip`);
} else {
    console.log(`ne`);
};

if(a1 === b1) {
    console.log(`taip`);
} else {
    console.log(`ne`);
};

// true - bet koks skaicius tik ne nulis
// false - atitinka nuli

const a2 = `labas`;
const b2 = 'rytas';

if(a2 === b2) {
    console.log(`taip`);
} else {
    console.log(`ne`);
};

const a3 = `labas`;
const b3 = 'Labas';

if(a2 === b2) {
    console.log(`taip`);
} else {
    console.log(`ne`);
};

console.log (`--------------------`)

const akys = `rudos`;

if (akys === `melynos`) {
    console.log(`Melinakys`);
} else {
    console.log(`Nezinoma akiu spalva`)
}

if (akys === `melynos`) {
    console.log(`Melinakys`);
} else if (akys === `zalios`) {
    console.log(`Zaliaakis`);
} else if (akys === `rudos`) {
    console.log(`Rudaakis`);
} else {
    console.log(`Nezinoma akiu spalva`)
};

if (akys === `melynos`) {
    console.log(`Melinakys`);
} else 
if (akys === `zalios`) {
    console.log(`Zaliaakis`);
} else 
if (akys === `rudos`) {
    console.log(`Rudaakis`);
} else {
    console.log(`Nezinoma akiu spalva`)
};

const plaukai = 'rudos';

if (plaukai === 'melynos') {
    console.log('Melynaplaukis');
}

if (plaukai === 'zalios') {
    console.log('Zaliaplaukis');
}

if (plaukai === 'rudos') {
    console.log('Rudaplaukis');
} else {
    console.log('Plauku spalva nera ruda... 🤔');
}

console.log('--------------------');

const parosMetas = 'rytas';
const arLyja = false;

if (parosMetas === 'rytas') {
    if (arLyja) {
        console.log('Labas rytas, nepamirsk skecio!');
    } else {
        console.log('Labas rytas!');
    }
} else {
    if (parosMetas === 'diena') {
        if (arLyja) {
            console.log('Labas diena, nepamirsk skecio!');
        } else {
            console.log('Labas diena!');
        }
    } else {
        if (parosMetas === 'vakaras') {
            if (arLyja) {
                console.log('Labas vakaras, nepamirsk skecio!');
            } else {
                console.log('Labas vakaras!');
            }
        } else {
            console.log('Neatpazintas paros metas');
        }
    }
}