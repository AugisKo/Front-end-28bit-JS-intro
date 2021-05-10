/*
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
    }
    
    return name;
  }

  describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(getPlanetName(2), 'Venus');
  Test.assertEquals(getPlanetName(5), 'Jupiter');
  Test.assertEquals(getPlanetName(3), 'Earth');
  });
  });

  function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
    }
    
    return name;
  }
*/
/*
You will be given an array a and a value x. All you need to do is check 
whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.
*/

  function check(a, x) {
    const f = a.length;
    for(let i=0; i < f; i++) {
        const skaicius = a[i];
        if (skaicius === x) {
        return true;
        }
    }
    return false;
  }

  
console.log(check([66, 101], 66), '->', true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), '->', true);
console.log(check(['t', 'e', 's', 't'], 'e'), '->', true);
console.log(check(['what', 'a', 'great', 'kata'], 'kat'), '->', false);

console.log('--------------------------------');

/*
Consider an array/list of sheep where some sheep may be missing from their place. 
We need a function that counts the number of sheep present in the array 
(true means present).

For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.
Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {

    const a = arrayOfSheep.length;
    console.log(a);
    let total = 0;
    for (let i=0; i < a; i++) {
        let sheep = arrayOfSheep[i];
        if ( sheep = true ) { total === total++}
        console.log(total);
    } return total;

  }

  var array1 = [true,  true,  true,  false,
                true,  true,  true,  true ,
                true,  false, true,  false,
                true,  false, false, true ,
                true,  true,  true,  true ,
                false, false, true,  true ];
                
  console.log(countSheeps(array1) == 17, "There are 17 sheeps in total")

  console.log('------- Masyve esanciu pozytiviu skaitmenu suma --------------');   

/*
  You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    let bendraSuma = 0;
      for (let i=0; i < arr.length; i++){
        const skaicius = arr[i];
        if (skaicius > 0) {
            bendraSuma += skaicius;
        }
      }
        return bendraSuma; 
}

console.log(positiveSum([1,2,3,4,5]), '->', 15);
console.log(positiveSum([1,-2,3,4,5]), '->', 13);
console.log(positiveSum([]), '->', 0);
console.log(positiveSum([-1,-2,-3,-4,-5]), '->', 0);
console.log(positiveSum([-1,2,3,4,-5]), '->', 9);

console.log('------- Dvieju masyvu palyginimas --------------'); 


/* SpeedCode #2 - Array Madness

Objective
Given two integer arrays a, b, both of length >= 1, create a program that returns true 
if the sum of the squares of each element in a is strictly greater than the sum of 
the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

*/
function arrayMadness(a, b) {

    let kvadratuSuma = 0;
    let kubuSuma = 0;
 
    for (let i=0; i < a.length; i++) {
        kvadratuSuma += a[i]**2;
    }
    for (let i=0; i < b.length; i++) {
        kubuSuma += b[i]**3;
    }
    return kvadratuSuma > kubuSuma;
  }


console.log(arrayMadness([4,5,6],[1,2,3]), true);
console.log(arrayMadness([5,6,7],[4,5,6]), false);
console.log(arrayMadness([4,5,6],[3,4,5]), false);
console.log(arrayMadness([3,4,5],[2,3,4]), false);
console.log(arrayMadness([2,3,4],[1,2,3]), false);
console.log(arrayMadness([1,2,3],[0,1,2]), true);
console.log(arrayMadness([5,3,2,4,1],[15]), false);
console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);

console.log('------- Lenkisku raidziu keitimas 1 --------------'); 

/*

There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/

function correctPolishLetters (string) {
   let convertedString = '';
   for (i=0; i < string.length; i++) {
       const raide = string[i];

       switch (raide) {
            case 'ą': convertedString += 'a'; break;
            case 'ć': convertedString += 'c'; break;
            case 'ę': convertedString += 'e'; break; 
            case 'ł': convertedString += 'l'; break; 
            case 'ń': convertedString += 'n'; break; 
            case 'ó': convertedString += 'o'; break;
            case 'ś': convertedString += 's'; break; 
            case 'ź': convertedString += 'z'; break; 
            case 'ż': convertedString += 'z'; break; 
                                
            default:
                convertedString += raide; break;
        }
   }
   return convertedString;
}

console.log(correctPolishLetters("Jędrzej Błądziński"), '->', "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), '->', "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), '->', "Maria Sklodowska-Curie");

   
console.log('------- Lenkisku raidziu keitimas 2 --------------'); 

function correctPolishLetters (string) {

    let convertedString = '';
    const polish = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'];
    const latin = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];

    for (let i = 0; i < string.length; i++) {
        const raide = string[i];
        let convertedletter = raide;

        for (let p = 0; p < polish.length; p++) {
            const polishletter = polish[p];

            if(polishletter === convertedletter) {
                convertedletter = latin[p];
            }
        }
        convertedString += convertedletter;
    }

    return convertedString;

    }
    // einame per raides
        // paimu raide
        // jeigu raide yra ne lenkiska
            // tiesiog pridedame prie convertedString
        // jeigu lenkiska -pridedame prie vonvertedString atitinkama lotiniska tos raides versija




console.log(correctPolishLetters("Jędrzej Błądziński"), '->', "Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"), '->', "Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"), '->', "Maria Sklodowska-Curie");


console.log('------- Raidziu skaicius zodije --------------');

/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

Example (Inputs --> Output)

"Hello", 'o' => 1
"Hello", 'l' => 2
"", 'z'      => 0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1

*/

function strCount(str, letter){  
    let total = 0;
    let total1 = 0; 
    let letter1 = 1;
    for (i = 0; i < str.length; i++) {
        if (str[i] === letter) {total++}
    }
    return total;
  }


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);


/*
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats are considered UNeven for this kata.
*/

function testEven(n) {
    return !(n % 2);
}

console.log(testEven(0), true, "testEven for 0");
console.log(testEven(0.5), false, "testEven for 0.5");
console.log(testEven(1), false, "testEven for 1");
console.log(testEven(2), true, "testEven for 2");
console.log(testEven(-4), true, "testEven for 2");

console.log('--------------------------');

/*
Will you make it?
You were camping with your friends far away from home, but when it's time to go back, 
you realize that your fuel is running out and the nearest pump is 50 miles away! 

You know that on average, your car runs on about 25 miles per gallon. 

There are 2 gallons left. Considering these factors, write a function that tells you 
if it is possible to get to the pump or not. Function should return true (1 in Prolog) 
if it is possible and false (0 in Prolog) if not. 

The input values are always positive.
*/

function zeroFuel(distanceToPump, mpg, fuelLeft){
    const PossibleDriveMiles = mpg * fuelLeft;

    if (PossibleDriveMiles >= distanceToPump ) { return true
    }
    return false;
  };



console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

console.log('-------------- Amziai ---------------')

/*
Find the Difference in Age between Oldest and Youngest Family Members

At the annual family gathering, the family likes to find the oldest living 
family member’s age and the youngest family member’s age and calculate the difference 
between them.

You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, 
will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) 
with [youngest age, oldest age, difference between the youngest and oldest age].
*/

function differenceInAges(ages){


}

console.log(differenceInAges([82, 15, 6, 38, 35]), '->', [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), '->', [14, 99, 85]);

console.log('-------------- Vazonai ---------------')
/* 
Uzduotis
  - duodama, kiek turim geliu
  - duodama, kiek viana gele "susilaukia" nauju gelyciu
  - duodama, kiek turiu vazonu
  - reikai rasti, kiek vazonu truksta?
*/

function flowers (turimGeliu, naujosGeles, turimVazonu) {
  const visoGeliu = turimGeliu * (1 + naujosGeles);
  const reikiaVazonu = visoGeliu; 
  const trukstaVazonu = reikiaVazonu - turimVazonu;
  if (trukstaVazonu < 0) { return 0;
  } return trukstaVazonu;
}

console.log (flowers (1,4,2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15); 
console.log(flowers(10,2,100), '->, 0');
console.log(flowers(0,200,0), '->, 0');

console.log('-------------- Plytos ---------------')

/* 
PLYTOS
  - gaunam, kiek sienu turi namas
  - gaunam, kokio plocio yra kiekviena siena (metrais)
  - sienos neturi angu ir/ar skyliu
  - gaunam sienos auksti, kuris visu yra vienodas
  - turim plytos dydi (aukstis ir plotis) (metrais)
   - reikia suzinoti, keliu plytu mums reikes, jei plytu skldyti negalima
*/

function bricks(sienuPlociai, sienosAukstis, plytosAukstis, plytosPlotis){
  let visoSienu=0;
  for (i=0; i < sienuPlociai.length; i++) {
    visoSienu += sienuPlociai[i];
  } console.log(visoSienu);
  const VisoPlytuH = Math.ceil(visoSienu/plytosPlotis);
  const VisoPlytuV = Math.ceil(sienosAukstis/plytosAukstis);
  return visoPlytu = VisoPlytuH * VisoPlytuV;
  }

console.log(bricks([1, 2], 1, 0.1, 0.2), '->', 150);
console.log(bricks([1, 1, 1], 1, 0.1, 0.2), '->', 150);
console.log(bricks([2, 1, 3], 0.5, 0.1, 0.2), '->', 150);
console.log(bricks([1.05], 1.05, 0.1, 0.2), '->', 66);

// Math.Ceil() - apvalina i didesni sveika skaiciu 
// Math.Floor() - apvalina i mazesni sveika skaiciu
// Math.Round() - i artimesni sveika skaiciu

console.log('-------------- Pienas ---------------')

/*

Gaminame pieno kokteilius:
  - gauname uzsakymu kieki per diena (vienetais)
  - gauname vienos porcijos dydi (litrais)
  - vienos karves duodamo pieno kiekis per diena (litrais)
  - reikia rasti, kiek reikia tureti karviu, norint patenkinti visus uzsakymus?

*/

function milk(uzsakymai, porcija, pienoIsKarves) {
  // validation
  if (typeof uzsakymai === 'undefined') {
      return 'ERROR: neduotas pirmasis parametras';
  }
  if (typeof uzsakymai !== 'number') {
      return 'ERROR: pirmas parametras turi buti skaicius';
  }
  if (uzsakymai < 0) {
      return 'ERROR: pirmas parametras negali buti neigiamas';
  }
  if (uzsakymai % 1 !== 0) {
      return 'ERROR: pirmas parametras turi buti sveikasis skaicius';
  }

  if (typeof porcija === 'undefined') {
      return 'ERROR: neduotas antrasis parametras';
  }
  if (typeof porcija !== 'number') {
      return 'ERROR: antras parametras turi buti skaicius';
  }
  if (porcija < 0) {
      return 'ERROR: antras parametras negali buti neigiamas';
  }

  if (typeof pienoIsKarves === 'undefined') {
      return 'ERROR: neduotas treciasis parametras';
  }
  if (typeof pienoIsKarves !== 'number') {
      return 'ERROR: trecias parametras turi buti skaicius';
  }
  if (pienoIsKarves <= 0) {
      return 'ERROR: trecias parametras turi buti didesnis uz nuli';
  }

  // logic
  const reikiaPieno = uzsakymai * porcija;
  const reikiaKarviu = Math.ceil(reikiaPieno / pienoIsKarves);

  // return result
  return reikiaKarviu;
}

console.log(milk('labas', 0.5, -9));
console.log(milk(100, true, -9));
console.log(milk(100, 0.5, 'pasideram'));
console.log(milk(-100, 0.5, 9));
console.log(milk(100, -0.5, 9));
console.log(milk(100, 0.5, -9));
console.log(milk(100, 0.5));
console.log(milk(100));
console.log(milk());
console.log(milk(2.5, 0.5, 9));

console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);

console.log(milk(NaN, 0.5, 9));
console.log(milk(Infinity, 0.5, 9));
console.log(milk(10, NaN, 9), '->', 1);
console.log(milk(100, Infinity, 9), '->', 6);
console.log(milk(10, 0.5, NaN), '->', 1);
console.log(milk(100, 0.5, Infinity), '->', 6);