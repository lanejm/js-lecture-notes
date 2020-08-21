//2. staements vs. expressions

//expression is something that has a value
//statement is something that says something

let x = 5; 

if (3 > 0) {
    console.log('three is greater than zero');
}

for (let i of ['a', 'b', 'c']) { //can put any expression where the arr is located in this example
    console.log(i);
}

//3. scope

let x = 5;

for (let i of [0, 1, 2]) {
    let x = 7;
    console.log(`${i}: ${x}`)
} //always refers to the most local (inner) variable that has that name. in this case, x=7 will take priority over x=5. If you added another x value farther in, that would take priority.

//var is leaky 

// 4. hoisting 

//can write a complex function at the top (getWeather), and via hoisting, can get more specific functions as you go down. 

//challenges

// Given dogArray, create a new array dogStatements.
// In dogStatements, you should have "____ is a good dog" if the dog's name is 12 characters or less.
// If the dog's name is greater than 12 characters, you should have "_____ is a VERY good dog".
// ['whippet is a good dog', 'st bernard is a good dog', etc. ]
// PLEASE USE: for-in or for-of, and a ternary

const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];
let dogStatements = [];

for (let dog of dogArray) {
    dogStatements.push((dog.length <= 12) ? `${dog} is a good dog` : `${dog} is a very good dog` );
    console.log(dogStatements);
}


// CHALLENGE 2.
// Given dogStatements (output of first challenge), console.log:
// wHiPpEt iS A GoOd dOg
// sT BeRnArD Is a gOoD DoG
// etc.
// PLEASE USE: ONE for-of, ONE for-in, and a ternary

const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];
let dogStatements = [];
for (let dog of dogArray) {
    dogStatements.push( (dog.length <= 12) ? `${dog} is a good dog` : `${dog} is a VERY good dog` );
  }

// for every statement of the dogStatements array:
for (let statement of dogStatements) {
    //   create an array
      let arr = [];
    //   for every letter of the statement:
      for (let index in statement) {
        // if it is even-indexed, make it lower case and add it to the array
        // if it is odd-indexed, make it UPPER case and add it to the array
        if (index % 2 === 0) {
          arr.push(statement[index].toLowerCase());
        } else {
          arr.push(statement[index].toUpperCase());
        }
      }
      //   turn the array into a string
      let str = arr.join('');
      //   print out the string
      console.log(str);
    }


// I would do it each night 
// Git add (Any files/folders you created)
// Git commit -m "Literal notes"
// Git push