// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */


/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/


/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

//Bronze
let nameOne = 'Josh'; 
let nameTwo = 'Kirsten';
console.log(`${nameOne} ${nameOne.length}`)
console.log(`${nameTwo} ${nameTwo.length}`)

/* Zach Maynard Code
let myName = "Zach";
let friend = "Isiah";

console.log(myName.length);
console.log(myName.length);

*/

//Silver
if (nameTwo >= nameOne) {
    console.log("Kirsten has the longer name!");
}
/* Zach Maynard Code
if (myName.length > friend.length) {
    console.log(`${friend}'s name is shorter than ${myName}'s name.`)
} else if (myName.length < friend.length){
    console.log(`${friend}'s name is longer than ${myName}'s name.`)
}

This way will allow you to accept data for names that you might not know--ex, a website form where users input data.
*/

//Gold
if (nameTwo >= nameOne) {
    console.log("Kirsten has the longer name!");
} else if(nameTwo <= nameOne) {
    console.log("Kirsten has the shorter name!");
}

if (nameOne.length <= nameTwo.length) {
    console.log("Kirsten has the longer name by " +(nameTwo.length - nameOne.length)+ " letters");
}

/* Zach Maynard Code
let myName = "Zach";
let friend = "Isaiah";

if (myName.length > friend.length) {
    let letters = myName.length - friend.length;
    console.log(`${friend}'s name is shorter than mine by ${letters} letters`)
} else if (myName.length < friend.length){
    let letters = friend.length - myName.length;
    console.log(`${friend}'s name is longer than mine by ${letters} letters`);
} else {
    console.log('Our names are the same length');  --This one is the end all if no other above conditions are met as true.
}
*/


// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

//Bronze
let myObject = {
    username: 'elleWoods',
    power: 'beastmode',
    toughness: 100,
    blonde: true,
    cellular: {
        lawSchool: 'Harvard',
        age: 30,
    }
}

console.log(typeof myObject.toughness);
console.log(typeof myObject.cellular.age);
//need to grab outer most layer before diving into it. 

//Silver

console.log(typeof myObject);
console.log(typeof true);
console.log(typeof 'beastmode');

if (typeof undefined) {
    console.log("What are you?!");
}

/* Instructor Code Answer

let value = myObject.cellular.age;

if (typeof value === 'string') {
    console.log ('this value is a string);
} else if (typeof value === 'number') {
    console.log ('this value is a number');
} else if (typeof value === 'boolean') {
    console.log ('this value is a boolean');
} else if (typeof value === 'object') {
    console.log ('this value is an object);
} else (typeof value === 'undefined') {
    console.log ('What are you!?');
}

*/