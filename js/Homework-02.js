function multiply(a,b){
    a * b
  }


/*
FUNKCIJOS
*/

/*  1.	Funkcija pavadinimu “tusciaFunkcija”:
        a.	nepriima jokių kintamųjų
        b.	neatlieka jokios vidinės logikos
        c.	gražina boolean tipo reikšmę “false”
        d.	TESTAS:
            i.	console.log( tusciaFunkcija() );
            ii.	rezultatas: false
*/

function tesciaFuncija() {
    return false;
}

console.log(tesciaFuncija(), '->', false);

/*  2.	Funkcija pavadinimu “daugyba”:
        a.	priima du skaičiaus tipo kintamuosius
        b.	atskirame kintamajame įsimena sandaugos reikšmę
        c.	gražina saudaugos rezultatą
        d.	TESTAI:
            i.	console.log( daugyba( skaicius1, skaicius2 ) );
            ii.	console.log( daugyba( skaicius3, skaicius2 ) );
            iii.	console.log( daugyba( skaicius1, skaicius3 ) );
            iv.	rezultatas: teisingos reikšmės;
*/

function daugyba(skaicius1, skaicius2, skaicius3){
    const sandaugosReiksme1 = skaicius1 * skaicius2;
    const sandaugosReiksme2 = skaicius3 * skaicius2;
    const sandaugosReiksme3 = skaicius1 * skaicius3;
    return sandaugosReiksme1; 
    return sandaugosReiksme2;
    return sandaugosReiksme3;
}

console.log(daugyba(2, 4, 5), '->', 8);
console.log(daugyba(4, 5), '->', 20);
console.log(daugyba(2, 5), '->', 10);


