/*
    CHALLENGE #1
        - Write a function that accepts two names as parameters, and then prints the full name to the console.
*/

function fullName (firstName, lastName){
    let wholeName = firstName + " " + lastName;
    return wholeName;
}
console.log(fullName("Ron", "Burgandy"));

/*
    - CHALLENGE #2
        - Write a program that prints all numbers from 0-100
            - for multiples of 6, instead of the number, print 'Fizz'
            - for multiples of 8, instead of the number, print 'Buzz'
            - for multiples of 6 AND 8, instead of the number, print 'Fizz Buzz'
*/

for (let x = 0; x <=100; x++){
    if (x % 6 == 0 && x % 8 == 0) {
        console.log('FizzBuzz');
    } else if (x % 6 == 0) {
        console.log('Fizz');
    } else if (x % 8 == 0) { 
        console.log('Buzz');
    } else console.log(x);
}
/*
    - CHALLENGE #3
        - Write a function called findPerimeter() that accepts 2 parameters called: length, width.
            - The function should return an interpolated string of 'True: the perimeter is ___' if the perimeter is over 20
            - the function should return an interpolated string of 'False: the perimeter is ___' if the perimeter is under 20
            HINT: P = x + x + y + y
                  P = 2x + 2y
                  P = 2(x + y)
*/

function findPerimeter (length, width) {
    let finalPerimeter = (2 *(length + width));
    if (finalPerimeter > 20) {
        console.log(`True: the perimeter is ${finalPerimeter}`);
    } else {
        console.log(`False: the perimeter is ${finalPerimeter}`);
    }
}
findPerimeter(50, 3);


/*
    - CHALLENGE #4
        - Create an object literal called library.
            - the library object will contain 3 properties: name, address, sections
                - name and address will both hold values that are strings. You can fabricate the information.
                - sections will be an object that will store a property called collections, which is an array of more objects. You should include at least 2 objects inside the collections array.
                    - the objects stored in the collections array will hold properties of classification, count, and aisle. 
                        - both the classification and aisle properties should hold strings as values, and count should hold a value that is a number.
*/

let library = {
    name: 'Pawnee Public Library',
    address: 'Pawnee, Indiana',
    sections: {
            collections: [{
                classification: 'mystery',
                aisle: 'Row 4',
                count: 50,
            },{
                classifcation: 'fiction',
                aisle: 'Row 2',
                count: 200,
            }]
        }
}
console.log(library.sections.collections[1].aisle);