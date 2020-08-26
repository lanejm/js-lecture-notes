/*
************
 FUNCTIONS
************
    - JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression. 
        - function declarations are hoisted in our code, and run only when we call them. So any function in our code sits and waits to be ran until we call it by it's name. Think of it as student with his or her hand up, waiting to ask a question. That student doesn't ask their question until the teach calls upon them. 
        - function expressions are not hoisted, and are generally stored in variables
            - after a function has been stored in a variable, that variables name can then be called to run the function
    - functions without names are known as anonymous functions
*/


//Function Declaration

function sayHello() {
    console.log('Hi');
}

//sayHello; //won't run.  Parentheses are what tell the function to run
sayHello(); //function invocation or function call

//Function expression -- function expressions are not hoist-able. 

let greetings = function() {     //anonymous function
    console.log('hello');
} 
greetings();

/*
************
 PARAMETERS
************
    - think of parameters as a newly declared variable that we haven't given a value to yet.
        - the value we pass into our function when we call the function to run (also known as an argument), is the value that gets assigned to the parameter.
    - general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog(husky){   //husky is the parameter in this example
    console.log(`my dog's name is ${husky}`);
}
myDog('Luna'); //'Luna' is the argument, or the value we're passing to the parameter of husky. 

let pet = myDog; // notice we're not calling, or invoking, the function of myDog.  We are assigning the function of myDog to a variable named pet.  I don't want the function to run, I just want to assign it to the variable of pet.  This is known as a function reference.  The variable of pet is referring to the function of myDog. 

pet();  //this will run the function, but since we did not include an argument, no value is assigned to the parameter of husky. 
pet('Luna');
pet('Mira');

// Multiple parameters and argument

// can give a default value and then wouldn't have to do if statement ex. let checker = 'no argument passed' and then add that to each parameter in parenthesis. 
function allMyDogs(smallHusky, bigHusky, borderCollie){
    if(smallHusky === undefined || bigHusky === undefined || borderCollie === undefined){   //don't have to put this step in. 
        console.log('no arguments passed');
    } else {
        console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`);
    }
}

allMyDogs();
allMyDogs('mira' , 'luna', 'charlie');  //the arguments we pass into our function call are assigned by position, or by order.  First argument get assigned to the first parameter, etc. 

/*
************
   RETURN
************
    - functions can also manipulate the data sent to them, and return a new value
*/

//find average weight

function calculator(one, two, three) {
    //console.log(one, two, three);
    let totalWeight = one + two + three;
    console.log(totalWeight);
    let average = Math.round(totalWeight / 3);  //math.round rounds the value to the nearest integer=

    return average;  //can also use Math.round() here.
}

let averageWeight = calculator(15, 60, 55);  //since we're returning a value from the function, we need a new variable to capture the return value.  Then, we we invoke, or call, the calculator function - the value that we return from that function is the value that's assigned to the averageWeight variable.  
console.log(averageWeight);

//Arrow Functions  --Eli leading instruction

//concise-body arrow function
let f = (x) => x + 5;  //expression to the right of arrow is what is returned. 
console.log(f(40)); 


//block-body arrow function, uses a block of code to the right of the arrow--need to explicitly say what you want to return.
let g = (x) => {
    console.log(x);
};
console.log(g(7));

//anything on the right side of an arrow can be an expression. 

