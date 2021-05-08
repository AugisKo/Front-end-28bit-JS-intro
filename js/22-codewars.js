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

    //einame per pirma sarasa
    for (let i=0; i < a.length; i++) {
        const element = a[i];
        kvadratuSuma = element*element;
    }

    for (let i=0; i < b.length; i++) {
        const element = b[i];
        kubuSuma = element*element*element;
    }

    if (kvadratuSuma > kubuSuma) { return true;
    } else { return false;}


        //pasiimame skaiciu
        //prisumuojame skaiciaus kvadrata

    //einame per antra sarasa
        //pasiimame skaiciu
        //prisumuojame skaiciaus kuba
    
    //jei kvadratu suma didesne uz kubu suma
        // graziname true
    // jei ne
        // graziname false

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
  