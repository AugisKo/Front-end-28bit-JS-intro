const akys = 'blue';

switch (akys) {
    case 'blue':
        console.log('Melynos');
        break;

    case 'green':
        console.log('Zalios');
        break;
    
    case 'brown':
        console.log('Rudos');
        break;

    default:
        console.log('Neatpazonta spalva');
        break;
}

if (akys === 'blue') {
    console.log ('Melynos');
} else if (akys === 'green') {
    console.log ('Zalios');
} else if (akys === 'brown') {
    console.log ('Rudos');
} else {
    console.log ('Neatpazinta spalva');
}

console.log ('------------');

const day = 2.5;

switch(day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('Darbo diena');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break; 

    default:
        console.log('Neatpazinta savaite diena');
        break;
}

if (day === 1 || 
    day === 2 || 
    day === 3 || 
    day === 4 || 
    day === 5) {
    console.log('Darbo diena');
} else if (day === 6 || day === 7) {
        console.log('Savaitgalis');
} else  {console.log('Neatpazinta savaites diena'); 
}

if (day >= 0 && day < 6) {
    console.log('Darbo diena');
} else if (day >= 6 && day < 7) {
    console.log('Savaitgalis');
} else  {
    console.log('Neatpazinta savaites diena'); 
}

console.log ('------------');

/*
Arbatos ruosimo procesas
    0) paimti puodeli
    1) isideti arbatos
    2) isideti saldykli
    3) uzpilti vandens
    4) ismaisyti
    5) gerti
*/

const processStep = 0;

switch (processStep){
    case 0:
        console.log('paimti puodeli');
    
    case 1:
        console.log('isideti arbatos');

    case 2:
        console.log('isideti saldykli');

    case 3:
        console.log('uzpilti vandens');

    case 4:
        console.log('ismaisyti');

    case 5:
        console.log('gerti');
        break;

    default:
        console.log('Neatpazintas procesas');
        break;
}

console.log('------------------');

const stotele = 'Rudens2';

switch (stotele) {
    case 'Geniu':
        console.log('Geniu');
    case 'Tremtiniu':
        console.log('Tremtiniu');
    case 'Rudens':
        console.log('Rudens');
    case 'K. Mindaugo':
        console.log('K. Mindaugo');
    case 'Z. Tiltas':
        console.log('Z. Tiltas');
        break;

    case 'Lvovo':
        console.log('Lvovo');
    case 'Vasaros':
        console.log('Vasaros');
    case 'Rudens2':
        console.log('Rudens2');
    case 'Tremtiniu2':
        console.log('Tremtiniu2');
    case 'N.V.Ziedas':
        console.log('N.V.Ziedas');
        break;

    default:
        console.log('Neatpazinta stotele');
        break;
}